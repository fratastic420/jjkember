<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Site;
use App\Tag;
use Carbon\Carbon;
use App\Image;
use File;

use Illuminate\Http\Request;
use App\Http\Requests\SiteRequest;

use Auth;

class SitesController extends Controller {

    
    protected $jsonpath;

	function __construct() {
        $this->middleware('auth',['except' =>['index', 'show']]);
        $this->jsonpath = public_path().'/json/sites/';
        File::exists($this->jsonpath) or File::makeDirectory($this->jsonpath);
    }
    
    /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    
	public function index(Request $request)
	{
		$r = $request->all();
        
        //fast caching of json files to eliminate database parsing
        $filename = $this->getJSONName($r);
        $jsonCache = $this->getJSON($this->jsonpath.$filename);
        if($jsonCache) return response($jsonCache,200)->header('Content-Type:', 'application/json');
        
        //coulnt find a cached json file lets do an eloquent query and cache that MOTHER.FUCKING.JSON
        
        if(isset($r['query']))
        {
            $q= addslashes($r['query']);
            $sites = Site::whereRaw(" `title` like '%$q%' ")
            ->orWhereRaw(" `text` like '%$q%' ")
            ->orWhereRaw(" `author` like '%$q%' " )
            ->orWhereRaw(" `tech` like '%$q%'")
            ->orWhereRaw(" `url` like '%$q%' ")
            ->orderBy('timestamp', 'desc')->get(); 
        }
        else
        {
            $sites = isset($r['tag_name']) ?  Tag::where('name', addslashes($r['tag_name']))->first()->sites : Site::orderBy('id','desc')->get();
        }
        
        foreach($sites as $site){
            $site->images = $site->images->toArray();
            $site->tags = $site->tags->toArray();
        }
        $response = '{"site":'.$sites.'}';
        $this->putJSON($this->jsonpath.$filename, $response);
        return response($response,200)->header('Content-Type:', 'application/json');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return redirect('sites.index');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(SiteRequest $request)
	{
        $site = new Site();
        $site = $this->bindModel($site, $request->all());
        $site->save();
        $this->syncTags($site, $request->input('tags'));
        $this->syncImages($site, $request->input('images'));
        $site->images = $site->images->toArray();
        $site->tags = $site->tags->toArray();
        $this->destroyJSON();
        return $site;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show(Site $site)
	{
		$site->images = $site->images->toArray();
        $site->tags = $site->tags->toArray();
        return $site;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit(Site $site)
	{
		return $site;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(SiteRequest $request, Site $site)
	{
        $site = $this->bindModel($site, $request->all());
        $site->save();
        $this->syncTags($site, $request->input('tags'));
        $this->syncImages($site, $request->input('images'));
        $site->images = $site->images->toArray();
        $site->tags = $site->tags->toArray();
        $this->destroyJSON();
        return $site;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(Site $site)
	{
        $site->delete();
		$this->destroyJSON();
        return redirect('api/sites');
	}
    
    /**
     * Function to bind the request object attributes to the model, instead of just jacking up the request->all object into the model
     *
     *  @var site @var request
     *
     *
     *  @return site
     */
    
    private function bindModel($model, $request)
    {
        $model->author = $request['author'];
        $model->mainimage = $request['mainimage'];
        $model->mainimageid = $request['mainimageid'];
        $model->text = $request['text'];
        $model->title = $request['title'];
        $model->url = $request['url'];
        $model->tech = $request['tech'];
        $model->timestamp = Carbon::now();
        return $model;
    }
    
    
    /**
     *
     * Have to parse and look up each tag in the arr because ember isnt sending up the ids for some fucking reason
     *
     *@var Artwork @var array
     *
     *@return void
     *
     */
    
    private function syncTags(Site $site, array $tags)
    {
        $arr = array();
        foreach($tags as $t)
        {
            $tag = Tag::where('name', $t['name'])->first();
            $arr[] = $tag->id;
        }
        $site->tags()->sync($arr);
    }
    
    /**
     *
     * Have to parse and look up each image in the arr because ember isnt sending up the ids for some fucking reason
     *
     *@var Artwork @var array
     *
     *@return void
     *
     */
    
    private function syncImages(Site $site, array $images)
    {
        $arr = array();
        foreach($images as $i)
        {
            $image = Image::where('imagepath', $i['imagepath'])->first();
            $arr[] = $image->id;
        }
        $site->images()->sync($arr);
    }
    
    /*
     * function determine the json file to search for
     *
     * @var $r = $request->all();
     *
     * @return string;
     *
     */
    
    private function getJSONName($r){
        if(isset($r['tag_name'])) return 'sites_tag_'.$r['tag_name'].'.json';
        if(isset($r['query'])) return 'sites_query_'.$r['query'].'.json';
        return 'sites.json';  
    }
   
      /*
     * function to store json
     *
     * @var $f = string, @var $c = string;
     *
     * @return boolean;
     *
     */
   
    private function putJSON($f, $c)
    {
        return File::put($f, $c);
    }
    
      /*
     * function to retriece cached json
     *
     * @var $f = string filname;
     *
     * @return mixed;
     *
     */
    
    private function getJSON($f)
    {
        if(File::exists($f)) return File::get($f);
        return false;
    }
    
      /*
     * function to clear json dir if any record has been created, destroyed, or updated
     *
     * @var $f = string, @var $c = string;
     *
     * @return boolean;
     *
     */
    
    private function destroyJSON()
    {
        return File::cleanDirectory($this->jsonpath);
    }

}

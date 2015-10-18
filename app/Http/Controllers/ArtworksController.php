<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Artwork;
use App\Http\Requests\ArtworkRequest;
use Carbon\Carbon;
use App\Image;
use App\Tag;
use File;
use Auth;


class ArtworksController extends Controller {

	protected $jsonpath;

	function __construct() {
        $this->middleware('auth',['except' =>['index', 'show']]);
        $this->jsonpath = public_path().'/json/artworks/';
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
        
        //otherwise lets fetch some articles as either tag search or query search then cache for later
        
        if(isset($r['query']))
        {
            $q = addslashes($r['query']);
            $artworks = Artwork::whereRaw(" `title` like '%$q%' ")
            ->orWhereRaw(" `text` like '%$q%' ")
            ->orWhereRaw(" `author` like '%$q%' " )
            ->orderBy('timestamp', 'desc')->get(); 
        }
        else
        {
            $artworks = isset($r['tag_name']) ?  Tag::where('name', addslashes($r['tag_name']))->first()->artworks : Artwork::orderBy('timestamp','desc')->get();
        }
        
        foreach($artworks as $artwork){
            $artwork->images = $artwork->images->toArray();
            $artwork->tags = $artwork->tags->toArray();
        }
        $response = '{"artwork":'.$artworks.'}';
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
		return redirect('artworks.index');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
    
	public function store(ArtworkRequest $request)
	{
        $artwork = new Artwork();
        $artwork = $this->bindModel($artwork, $request->all());
        $artwork->save();
        $this->syncTags($artwork, $request->input('tags'));
        $this->syncImages($artwork, $request->input('images'));
        $artwork->images = $artwork->images->toArray();
        $artwork->tags = $artwork->tags->toArray();
        $this->destroyJSON();
        return $artwork;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show(Artwork $artwork)
	{
        $artwork->images = $artwork->images->toArray();
        $artwork->tags = $artwork->tags->toArray();
        return $artwork;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit(Artwork $artwork)
	{
        return $artwork;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Artwork $artwork, ArtworkRequest $request)
	{
        $artwork = $this->bindModel($artwork, $request->all());
        $artwork->save();
        $this->syncTags($artwork, $request->input('tags'));
        $this->syncImages($artwork, $request->input('images'));
        $artwork->images = $artwork->images->toArray();
        $artwork->tags = $artwork->tags->toArray();
        $this->destroyJSON();
        return $artwork;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(Artwork $artwork)
	{
        $artwork->delete();
        $this->destroyJSON();
        return redirect('api/artworks');
	}
    
    protected function createArtwork($request)
    {
        //$article = Article::create($request->all());
        //return $article;
    }
    
    /**
     * Function to bind the request object attributes to the model, instead of just jacking up the request->all object into the model
     *
     *  @var artwork @var request
     *
     *
     *  @return artwork
     */
    
    private function bindModel($model, $request)
    {
        $model->author = $request['author'];
        $model->mainimage = $request['mainimage'];
        $model->mainimageid = $request['mainimageid'];
        $model->text = $request['text'];
        $model->title = $request['title'];
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
    
    private function syncTags(Artwork $artwork, array $tags)
    {
        $arr = array();
        foreach($tags as $t)
        {
            $tag = Tag::where('name', $t['name'])->first();
            $arr[] = $tag->id;
        }
        $artwork->tags()->sync($arr);
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
    
    private function syncImages(Artwork $artwork, array $images)
    {
        $arr = array();
        foreach($images as $i)
        {
            $image = Image::where('imagepath', $i['imagepath'])->first();
            $arr[] = $image->id;
        }
        $artwork->images()->sync($arr);
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
        if(isset($r['tag_name'])) return 'artworks_tag_'.$r['tag_name'].'.json';
        if(isset($r['query'])) return 'artworks_query_'.$r['query'].'.json';
        return 'artworks.json';  
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

<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\TagRequest;
use App\Tag;
use File; 
use Auth;

use Illuminate\Http\Request;

class TagsController extends Controller {

	protected $jsonpath;

	function __construct() {
        $this->middleware('auth',['except' =>['index', 'show']]);
        $this->jsonpath = public_path().'/json/tags/';
        File::exists($this->jsonpath) or File::makeDirectory($this->jsonpath);
    }
    
    /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $filename = 'tags.json';
        $jsonCache = $this->getJSON($this->jsonpath.$filename);
        if($jsonCache) return response($jsonCache,200)->header('Content-Type:', 'application/json');
        
        $response = '{"tag":'.Tag::all().'}';
        $this->putJSON($this->jsonpath.$filename, $response);
        return $response;
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return redirect('tags.index');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(TagRequest $request)
	{
        $tag = Tag::create($request->all());
        $this->destroyJSON();
        return $tag;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show(Tag $tag)
	{
		return $tag;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit(Tag $tag)
	{
		return $tag;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Tag $tag)
	{
        $this->destroyJSON();
		return $tag;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(Tag $tag)
	{
		$this->destroyJSON();
        return $tag;
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
        if(isset($r['tag_name'])) return 'tags_tag_'.$r['tag_name'].'.json';
        if(isset($r['query'])) return 'tags_query_'.$r['query'].'.json';
        return 'tags.json';  
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

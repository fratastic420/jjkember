<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Image;
use File;
use Auth;

class ImagesController extends Controller {

	protected $jsonpath;

	function __construct() {
        $this->middleware('auth',['except' =>['index', 'show']]);
        $this->jsonpath = public_path().'/json/images/';
        File::exists($this->jsonpath) or File::makeDirectory($this->jsonpath);
    }
    
    
    /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $filename = 'images.json';
        $jsonCache = $this->getJSON($this->jsonpath.$filename);
        if($jsonCache) return response($jsonCache,200)->header('Content-Type:', 'application/json');
        
        $response = '{"image":'.Image::latest('timestamp')->get().'}';
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
		return redirect('images.index');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		return redirect('images.index');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show(Image $image)
	{
		return $image;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit(Image $image)
	{
		return $image;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Image $image)
	{
        $this->destroyJSON();
		return $image;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(Image $image)
	{
		$image->delete();
        $this->destroyJSON();
        return $image;
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
        if(isset($r['tag_name'])) return 'images_tag_'.$r['tag_name'].'.json';
        if(isset($r['query'])) return 'images_query_'.$r['query'].'.json';
        return 'images.json';  
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

<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Image;
use File;
use LarImage;
use Carbon\Carbon;

use Auth;

class UploadsController extends Controller {

    protected $jsonpath;

	function __construct() {
        $this->middleware('auth',['except' =>['index', 'show']]);
        $this->jsonpath = public_path().'/json/images/';
        File::exists($this->jsonpath) or File::makeDirectory($this->jsonpath);
    }
    
    /**
     * Show all uploads
     *
     *@return Images
     *
     */

    public function index() {
        return '{"upload":'.Image::latest('timestamp')->take(1)->get().'}';
    }
	
    /**
     * Uploading function, DO NOT use var $image
     *
     *@return Images
     */
    
    public function upload(Request $request)
    {
        $input = $request->all();
        $files = $input["file"] or die($this->noFiles());
        $imageArr = $this->processImages($files);
        $this->destroyJSON();
        return $images = Image::find($imageArr);
    }
    
    
    /**
     * Updates image via POST data
     *
     *@return Image
     *
     */
    
    public function update(Request $request)
    { 
        $input = $request->all(); 
        $id = isset($input['uploadname']) ? $input['uploadname'] : $this->getImageByPath($input['uploadpath']);
        $p = public_path();
        $o = isset($input['uploadoperation']) ? $input['uploadoperation'] : dd($this->imageFailure());
        $main = isset($input['uploadpath']) ?  $p.$input['uploadpath'] : dd($this->imageFailure());
        $thumb = isset($input['uploadthumb']) ? $p.$input['uploadthumb'] :  dd($this->imageFailure());
        $data = isset($input['uploaddata']) ?  $input['uploaddata'] :  dd($this->imageFailure());
        $h = isset($input['uploadheight']) ? $input['uploadheight'] : 80;
        $w = isset($input['uploadwidth']) ? $input['uploadwidth'] : 80;
        if(File::exists($main)) File::delete($main);
        if(File::exists($thumb) && $o != 'header') File::delete($thumb);
        if($o != 'header'){ 
            if($img = LarImage::make($data)->save($main)->fit($w,$h)->save($thumb)) return $this->uploadResponse($input);
        }
        else {
            if($img = LarImage::make($data)->fit($w, $h)->save($main)) return $this->uploadResponse($input);
        }
        return $this->imageFailure();
    }

    protected function getImageByPath($path)
    {
        $image = Image::where('imagepath', $path)->firstOrFail();
        return $image->id;
    }
    
    /**
     *
     * Spit out an empty json header with a message error editting
     *
     * @return array
     *
     */
    
    
    protected function imageFailure() {
        return response(array('msg' => 'Image could not be edited'), 401) //400 status code: forbidden, needs authentication
		->header('Content-Type:', 'application/json');
    }
    
    
    /**
     *
     * Spit out an empty json header with a message no files
     *
     * @return array
     *
     */
    
    
    protected function uploadResponse()
    {
        return response(array('success'=>true), 200)
            ->header('Content-Type:', 'application/json');
    }
    
    protected function noFiles()
    {
        return response(array('msg' => 'No uploads provided'), 401) //400 status code: forbidden, needs authentication
		->header('Content-Type:', 'application/json');
    }
    
    /**
     * Process the image upload request array
     *
     * @var array
     *
     * @return array
     *
     */
    
    protected function processImages($files)
    {
        $imageArr = array();
        foreach($files as $file){
            $filename = time().'-'.$file->getClientOriginalName();
            $fullDir = $this->curDir();
            $webDir = $this->curDir(false);
            $img = LarImage::make($file->getRealPath());
            $mainImg = $img->save($fullDir.$filename);
            $thumbImg  = $img->fit(80,80)->save($fullDir.'thumb-'.$filename);
            $image = new Image();
            $image->imagepath =$webDir.$filename;
            $image->imagetype = $mainImg->extension;
            $image->thumbpath = $webDir.'thumb-'.$filename;
            $image->timestamp = Carbon::now();
            $image->save();
            $imgArr[] = $image->id;
        }
        return $imageArr;
    }
    
    
    
    
    /**
     *
     * create a new upload directory in the public folder and return the folder name in month_year format
     * like 01_2015
     * 
     * @var boolean
     *
     * @return string
     */
    
    protected function curDir($fullpath = true)
    {
        $dir = date('m_Y');
        $cdir = public_path().'/uploads/'.$dir.'/';
        File::exists($cdir) or File::makeDirectory($cdir);
        if($fullpath) return $cdir; else return '/uploads/'.$dir.'/';
  
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

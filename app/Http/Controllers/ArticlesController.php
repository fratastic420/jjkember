<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Tag;
use App\Article;
use App\Image;
use Carbon\Carbon;
use File;
use Auth;


use Illuminate\Http\Request;
use App\Http\Requests\ArticleRequest;

class ArticlesController extends Controller {
    
    protected $jsonpath;

	function __construct() {
        $this->middleware('auth', ['except' => ['index','show']]);
        $this->jsonpath = public_path().'/json/articles/';
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
        
        
        //if no file exists
        $start = isset($r['start']) ? $r['start'] : 0;
        if(isset($r['query']))
        {
            $q = addslashes($r['query']);
            $articles = Article::whereRaw(" `title` like '%$q%' ")
            ->orWhereRaw(" `text` like '%$q%' ")
            ->orWhereRaw(" `author` like '%$q%' " )
            ->orderBy('timestamp', 'desc')->get(); 
        }
        else
        {
            $articles = isset($r['tag_name']) ?  Tag::where('name', addslashes($r['tag_name']))->first()->articles : Article::orderBy('timestamp','desc')->get();
        }
        
        
        foreach($articles as $article){
            //$article->diffForHumans = $article->updated_at->diffForHumans();
            $article->images = $article->images->toArray();
            $article->tags = $article->tags->toArray();
        }
        $response = '{"article":'.$articles.'}';
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
		return redirect('articles.index');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(ArticleRequest $request)
	{
        $article = new Article();
        $article = $this->bindModel($article, $request->all());
        $article->save();
        $this->syncTags($article, $request->input('tags'));
        $this->syncImages($article, $request->input('images'));
        $article->images = $article->images->toArray();
        $article->tags = $article->tags->toArray();
        $this->destroyJSON();
        return $article;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show(Article $article)
	{
		//$article->diffForHumans = $article->updated_at->diffForHumans();
        $article->images = $article->images->toArray();
        $article->tags = $article->tags->toArray();
        return $article;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit(Article $article)
	{
		return $article;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(ArticleRequest $request, Article $article)
	{
        $article = $this->bindModel($article, $request->all());
        $article->save();
        $this->syncTags($article, $request->input('tags'));
        $this->syncImages($article, $request->input('images'));
        $article->images = $article->images->toArray();
        $article->tags = $article->tags->toArray();
        $this->destroyJSON();
        return $article;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy(Article $article)
	{
        $article->delete();
        $this->destroyJSON();
		return redirect('api/articles');
	}
    
    /**
     * Function to bind the request object attributes to the model, instead of just jacking up the request->all object into the model
     *
     *  @var article @var request
     *
     *
     *  @return article
     */
    
    private function bindModel($model, $request)
    {
        $request['text'] = $this->styleEmbededText($request['text']);
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
     * Add class of img img-responsive to all img tags in the text field, for better styling when the HTML editor falls to apply these tags
     *
     * @var string
     *
     * @return string
     *
     */
    
    private function styleEmbededText($text)
    {
        $imgTag = '<img';
        $class = 'img img-responsive';
        $pos = strrpos($class, $text);
        if($pos === false){
            $text = str_replace('<img', '<img class="'.$class.'" ', $text);
        }
        return $text;
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
    
    private function syncTags(Article $article, array $tags)
    {
        $arr = array();
        foreach($tags as $t)
        {
            $tag = Tag::where("name", $t)->firstOrFail();
            $arr[] = $tag->id;
        }
        $article->tags()->sync($arr);
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
    
    private function syncImages(Article $article, array $images)
    {
        $arr = array();
        foreach($images as $i)
        {
            $image = Image::where('imagepath', $i['imagepath'])->firstOrFail();
            $arr[] = $image->id;
        }
        $article->images()->sync($arr);
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
        if(isset($r['tag_name'])) return 'articles_tag_'.$r['tag_name'].'.json';
        if(isset($r['query'])) return 'articles_query_'.$r['query'].'.json';
        return 'articles.json';  
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

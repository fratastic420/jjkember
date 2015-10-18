<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\CountRequest;
use App\Article;
use App\Artwork;
use App\Site;

use Illuminate\Http\Request;

class CountController extends Controller {

	public function update(CountRequest $request)
    {
        $views = 0;
        $result = false;
        $r= $request->all();
        $id = $r['id'];
        $m = $r['model'];
        switch($m){
            case "artwork":
                $artwork = Artwork::findOrFail($id);
                $views = ($artwork->views) + 1;
                $artwork->views = $views;
                $artwork->save();
                $result = true;
                break;
        }
        return $this->result($result, $views);
        
    }
    
    private function result($result, $views = 0) {
        return response(array("success"=>$result, "views" => $views))
            ->header('Content-Type:', 'application/json');
    }

}

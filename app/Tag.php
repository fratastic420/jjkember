<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model {

	protected $fillable = [
      'name',
      'text'
    ];
    
    public function articles()
    {
        return $this->belongsToMany('App\Article');
    }
    
    public function sites()
    {
        return $this->belongsToMany('App\Site');
    }
    
    public function artworks()
    {
        return $this->belongsToMany('App\Artwork');
    }   

}

<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Artwork extends Model {

	//protected $dates = ['timestamp'];
    
    protected $fillable = [
      'title',
      'text',
      'tags',
      'mainimageid',
      'mainimage',
      'auximages',
      'author',
      'timestamp',
      'views'
    ];
    
    public function tags()
    {
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }
    
    public function images()
    {
        return $this->belongsToMany('App\Image')->withTimestamps();
    }

}

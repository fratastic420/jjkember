<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model {

	//
    protected $dates = ['timestamp'];
    
    protected $fillable = [
        'imagepath',
        'imagetype',
        'timestamp',
        'thumbpath',
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

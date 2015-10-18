<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model {

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
    
    //public function setPublishedAtAttribute($date)
    //{
    //    $this->attributes['published_at'] = Carbon::parse($date);
    //}
    //
    //public function scopePublished($query)
    //{
    //    $query->where('published_at', '<=', Carbon::now());
    //}
    //
    //public function scopeUnpublished($query)
    //{
    //    $query->where('published_at', '>', Carbon::now());
    //}
    //
    //public function user()
    //{
    //    return $this->belongsTo('App\User');
    //}
    //
    //public function tags()
    //{
    //    return $this->belongsToMany('App\Tag')->withTimestamps();
    //}
    //
    //public function getTagListAttribute()
    //{
    //    return $this->tags->lists('id');
    //}
    //
    //public function getPublishedAtAttribute($date)
    //{
    //    return new Carbon($date);
    //}
    

}

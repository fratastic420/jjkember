//MODELS
//DATA DATA DATA DATA -> MODELS
//TODOS -> remove default variables in functions bc only firefox likes this and the rest of the browsers are lame

// Article Model 
App.Article = Ember.Model.extend({
   title: Ember.attr(),
   text: Ember.attr(),
   views: Ember.attr(),
   tags: Ember.hasMany('App.Tag', {key: "tags", embedded:true}),
   mainimage: Ember.attr(),
   mainimageid: Ember.belongsTo('App.Image', {key:"mainimageid"}),
   auximages: Ember.hasMany('App.Image', {key:"images",embedded:true}), 
   author: Ember.attr(),
   timestamp: Ember.attr(),
   diffForHumans: function() {
      var t = this.get('timestamp'), s;
      return moment(t, "YYYY-MM-DD HH:mm:ss").fromNow();//2015-06-09 19:31:28
   }.property('timestamp'),
   formatedTime: function() {
     var t = this.get('timestamp'), s;
     if (t) {
      s = t.replace(" ","T");
      return new Date(s).toLocaleString();
     }
      return this.get('timestamp');
   }.property('timestamp'),
   slug: function() {
    return this.get('title').replace(/\s+/g, '-').toLowerCase();
  }.property('title') 
});


// Site Model
App.Site = Ember.Model.extend({
   url: Ember.attr(),
   tech: Ember.attr(),
   title: Ember.attr(),
   text: Ember.attr(),
   views: Ember.attr(),
   tags: Ember.hasMany('App.Tag', {key: "tags", embedded:true}),
   mainimage: Ember.attr(),
   mainimageid: Ember.belongsTo('App.Image', {key:"mainimageid"}),
   auximages: Ember.hasMany('App.Image', {key:"images",embedded:true}), 
   author: Ember.attr(),
   timestamp: Ember.attr(),
   diffForHumans: function() {
      var t = this.get('timestamp'), s;
      return moment(t, "YYYY-MM-DD HH:mm:ss").fromNow();//2015-06-09 19:31:28
   }.property('timestamp'),
   formatedTime: function() {
     var t = this.get('timestamp'), s;
     if (t) {
      s = t.replace(" ","T");
      return new Date(s).toLocaleString();
     }
      return this.get('timestamp');
   }.property('timestamp'),
   slug: function() {
    return this.get('title').replace(/\s+/g, '-').toLowerCase();
  }.property('title') 
});

// Artwork Model
/*
Title, thumb-mainsquare, Description, Social media(tweet it, pin it, facebook it), instagram link, deviantart link, keywords
*/

App.Artwork = Ember.Model.extend({
   title: Ember.attr(),
   text: Ember.attr(),
   tags: Ember.hasMany('App.Tag', {key: "tags", embedded:true}),
   mainimage: Ember.attr(),
   mainimageid: Ember.belongsTo('App.Image', {key:"mainimageid"}),
   auximages: Ember.hasMany('App.Image', {key:"images",embedded:true}), 
   author: Ember.attr(),
   timestamp: Ember.attr(),
   views: Ember.attr(),
   diffForHumans: function() {
      var t = this.get('timestamp'), s;
      return moment(t, "YYYY-MM-DD HH:mm:ss").fromNow();//2015-06-09 19:31:28
   }.property('timestamp'),
   pinthis: function() {
      return "https://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.jaredjkramer.com%2F%23%21%2Fartwork%2F"
         +this.get("id")+"%2F"+this.get('slug')+"%2F&media=http%3A%2F%2Fwww.jaredjkramer.com/"+encodeURIComponent(this.get("mainimage"))+"&description="+this.get('title')+"%20-%20Art%20by%20Jared%20J%20Kramer%20http%3A%2F%2Fwww.jaredjkramer.com%2Fartworks%2F";
   }.property("id","title","mainimage","mainimageid"), // this may need to be in the controller...
   facebookthis: function() {
      return "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://www.jaredjkramer.com/#!/artwork/"+this.get('id')+"/"+this.get('slug')+"&p[images][0]=http://www.jaredjkramer.com/"+this.get("mainimage")+"&p[title]="+encodeURIComponent(this.get('title'))+"&p[summary]="+encodeURIComponent(this.get('text'));
   }.property('id', 'title', "mainimage", "mainimageid", 'text'),
   googleplus: function() {
      return "https://plus.google.com/share?url=http://www.jaredjkramer.com/#!/artwork/"+this.get('id')+"/"+this.get('slug');
   }.property('id'),
   tweetthis: function(){
      return "https://twitter.com/intent/tweet?text=Check%20out%20this%20Amazing%20art%20by%20@jjkramer_tech%20http://www.jaredjkramer.com/%23%21/artwork/"+this.get('id')+"/"+this.get('slug')+"%20%20";
   }.property('id'),
   formatedTime: function() {
     var t = this.get('timestamp'), s;
     if (t) {
      s = t.replace(" ","T");
      return new Date(s).toLocaleString();
     }
      return this.get('timestamp');
   }.property('timestamp'),
   slug: function() {
    if (this.get('title')) {
      return this.get('title').replace(/\s+/g, '-').toLowerCase();
    }
    return false;
  }.property('title') 
});


// Image Model
App.Image = Ember.Model.extend({
   imagepath: Ember.attr(),
   imagetype: Ember.attr(),
   thumbpath: Ember.attr(),
   timestamp: Ember.attr(),
   noCacheImage: function() {
      return this.get('imagepath')+'?t='+ new Date().getTime();
   }.property('imagepath'),
   noCacheThumb: function() {
      return this.get('thumbpath')+'?t='+ new Date().getTime();
   }.property('thumbpath')// artwork -> belongs to artwork model, article -> belongs to article
});

App.Upload = Ember.Model.extend({
   uploadname: Ember.attr(),
   uploadpath: Ember.attr(),
   uploadtype: Ember.attr(),
   uploaddata: Ember.attr(),
   uploadthumb: Ember.attr(),
   uploadoperation: Ember.attr(),
   uploadheight: Ember.attr(),
   uploadwidth: Ember.attr()
});

App.Tag = Ember.Model.extend({
   name: Ember.attr()
});

App.About = Ember.Model.extend({
   
});

App.Tweet = Ember.Model.extend({
   token: Ember.attr(),
   user: Ember.attr(),
   status: Ember.attr(),
   imageid: Ember.belongsTo('App.Image', {key:"imageid"}),
   signedIn: function() {
      if(this.get('token')){
         return true;
      }
      return false;
   }.property('token'),
   charsLeft: function() {
      return 140 - this.get('status').length;
   }.property('status')
});


//Adapters for REST REST REST
var appurl = 'api/';
//articles
App.Article.adapter = Ember.RESTAdapter.create();
App.Article.url = appurl+'articles';
App.Article.collectionKey = 'article';


//images
App.Image.adapter = Ember.RESTAdapter.create();
App.Image.url = appurl+'images';
App.Image.collectionKey = 'image';
//sites
App.Site.adapter = Ember.RESTAdapter.create();
App.Site.url = appurl+'sites';
App.Site.collectionKey = 'site';
//art
App.Artwork.adapter = Ember.RESTAdapter.create();
App.Artwork.url = appurl+'artworks';
App.Artwork.collectionKey = 'artwork';
//upload -> for saving purposes
App.Upload.adapter = Ember.RESTAdapter.create();
App.Upload.url = appurl+'uploads';
App.Upload.collectionKey = 'upload';

//tags for searching
App.Tag.adapter = Ember.RESTAdapter.create();
App.Tag.url = appurl+'tags';
App.Tag.collectionKey = 'tag';

//about model
App.About.adapter = Ember.RESTAdapter.create();
App.About.url = appurl+'about';
App.About.collectionKey = 'about';

App.Tweet.adapter = Ember.RESTAdapter.create();
App.Tweet.url = appurl+'tweets';
App.Tweet.CollectionKey = 'tweet';



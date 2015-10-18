// *NOTE* -> hasMany well fetch async

//TODOS -> remove default variables in functions bc only firefox likes this and the rest of the browsers are lame
App.Router.map(function() {
   this.resource('articles', function() {});
   //this.resource('articles', {path: 'articles/:start'});
   this.resource('article', {path:'article/:article_id/:slug'}, function() { });
   
   this.resource('sites', function() {});
   this.resource('site', {path:'site/:site_id/:slug'}, function() {});
   
   this.resource('images', function() {});
   this.resource('image', {path:'image/:image_id'});
   
   this.resource('artworks', function() {});
   this.resource('artwork', { path: 'artwork/:artwork_id/:slug' }, function() { });
   //edit
   this.resource('editarticle', {path:'editarticle/:article_id'}, function(){});
   this.resource('editartwork', {path:'editartwork/:artwork_id'}, function(){});
   this.resource('editsite', {path:'editsite/:site_id'}, function(){}); 
   //tagged
   this.resource('taggedarticles', {path:'taggedarticles/:tag_name'}, function(){});
   this.resource('taggedartworks', {path:'taggedartworks/:tag_name'}, function(){});
   this.resource('taggedsites', {path:'taggedsites/:tag_name'}, function(){}); 
   //site search
   this.resource('search', {path:'search/:query'}, function(){});  
   //new
   this.resource('addarticles', function() {
        this.route('new');;
    });
   this.resource('addartworks', function() {
      this.route('new');
    });
   this.resource('addsites', function() {
        this.route('new');
    });
   this.resource('editimages', function() {
         this.route('edit');
   });
   
});

//Counter for Certain Pages Yo!
App.PagecounterMixin = Ember.Mixin.create({
    pageViews: function(views) {
      this.controller.set('totalViews', views);
    },
    updateCounter: function(model) {
      var routename = this.routeName, route = this;
      request = RESTRequest.req({id: model[routename].id, model: routename}, "api/updatecount");
            request.done(function(data) {
             //data = $.parseJSON(data);
             if (data.success == true){
               route.pageViews(data.views);
             }
            }).fail( function(error) {
      }); 
   }
});


//handy for stopping transitions on editing!
App.TransitionMixin = Ember.Mixin.create({
   restrictedRoute: function(transition) { 
      var admin = this.controllerFor('application').get('isFullAdmin'),
      user = this.controllerFor('application').get('currentUser'),
      token = $.cookie('access_token'),
      route = this;
      //Gotta toggle on and off that fucking DISQUS shit when Im in the control panel
      if (!admin) {
         transition.abort();
      } else {
         //turn off disqus cuz we going to a non public page
         showDisqus = false;
        // console.log(transition);
        ////I would like to collapse the tool tray here if possible :\
        ////need to implement a access token validation
        //request = RESTRequest.req({token: token, currentUser: user}, 'api/api.php/validate');
        //request.done(function(data) {
        //    if (!data.success) {
        //       transition.abort();
        //    }
        // }).fail( function(error) {
        //    transition.abort();
        // });
      }
   },
   actions: {
        willTransition: function(transition){
            var route = this;
            if (this.controllerFor('application').get('overrideTransition') === true) {
               route.transitionTo(transition.targetName);
               this.controllerFor('application').set('overrideTransition', false);
            }
            else if (this.get('isDirty')) {
               if(!this.confirmTransition){
                  noty({
                     text: "Abandon all your work?",
                     layout: "center",
                     modal: true,
                     buttons: [
                        {addClass: "btn btn-default", text: "Cancel", onClick: function($noty){
                              route.initTransition = false;
                              $noty.close();
                           }     
                        },
                        {addClass:"btn btn-danger", text: "<i class=\"glyphicon glyphicon-exclamation-sign\"></i> Blow the damn thing up!", onClick: function($noty){
                              showDisqus = true;
                              $noty.close();
                              route.confirmTransition = true;
                              route.transitionTo(transition.targetName);
                              route.confirmTransition = false;
                              route.initTransition = false;
                        
                           }   
                        }
                     ]
                  });
                  
               }
               if (!this.confirmTransition) {
                  if(!this.initTransition){
                     transition.abort();
                     this.initTransition = false;
                  }
               }  
            }
        }
    }

});


(function() {

var get = Ember.get, set = Ember.set;

var hashbangLocation = Ember.HashLocation.extend({ 

    getURL: function() {
        return get(this, 'location').hash.substr(2);
    },

    setURL: function(path) {
        get(this, 'location').hash = "!"+path;
        set(this, 'lastSetURL', "!"+path);
    },

    onUpdateURL: function(callback) {
        var self = this;
        var guid = Ember.guidFor(this);

            Ember.$(window).bind('hashchange.ember-location-'+guid, function() {
                Ember.run(function() {
                    var path = location.hash.substr(2);
                    if (get(self, 'lastSetURL') === path) { return; }

                    set(self, 'lastSetURL', null);

                    callback(location.hash.substr(2));
                });
            });
        },

        formatURL: function(url) {
            return '#!'+url;
        }

    });

App.register('location:hashbang', hashbangLocation);

})();


if (window.history && window.history.pushState) {
  App.Router.reopen({
    location: 'hashbang',
    rootURL: 'index.html'
  });
}

//App.ApplicationRoute = Ember.Route.extend({
//   model: function() {
//      return Ember.RSVP.hash({
//         about: App.About.find()
//      });
//   },
//   setupController: function(controller, model){
//      controller.set('model', model.about);  
//   }
//});

//Articles & Index

App.IndexRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor('application').set('pageImage', 'img/main_image.jpg').set('pageTitle', ' I have stories to tell').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
   model: function() {
    return Ember.RSVP.hash({
        articles: App.Article.findAll(),
        images: App.Image.findAll()
    });
   },
   setupController: function(controller,model){
        controller.set('model', model.articles);
   }
});

App.SearchRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('pageTitle', null).set('isPublic', true).set('hasFooter',true).set('hasAbout', false);
   },
   model: function(params) {
      return Ember.RSVP.hash({
         articles: App.Article.findQuery(params),
         sites: App.Site.findQuery(params),
         artworks: App.Artwork.findQuery(params)   
      });
   },
   setupController: function(controller, model) {
      controller.set('model', model.articles);
      controller.set('sites', model.sites);
      controller.set('artworks', model.artworks);
   }
});

App.TaggedarticlesRoute = Ember.Route.extend({
    afterModel: function() {
      this.controllerFor('application').set('pageImage', 'img/main_image.jpg').set('pageTitle', ' I have stories to tell').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
   model: function(params) {
    return Ember.RSVP.hash({
        articles: App.Article.findQuery(params),
    });
   },
   setupController: function(controller,model){
        controller.set('model', model.articles);
   }
});


App.ArticlesRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor('application').set('pageImage', 'img/main_image.jpg').set('pageTitle', ' I have stories to tell').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
   model: function(params) {
      //console.log(params);
    return Ember.RSVP.hash({
        articles: App.Article.findAll(params),
    });
   },
   setupController: function(controller,model){
        controller.set('model', model.articles);
   }
    
});


App.ArtworksRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor("application").set('pageImage', 'img/art_image.jpg').set('pageTitle', ' I illustrate things').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
    model: function() {
        return Ember.RSVP.hash({
            artwork: App.Artwork.findAll(),
        });
    },
    setupController: function(controller,model){
         controller.set('model', model.artwork);
    }
});

App.TaggedartworksRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor("application").set('pageImage', 'img/art_image.jpg').set('pageTitle', ' I illustrate things').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
    model: function(params) {
        return Ember.RSVP.hash({
            artwork: App.Artwork.find(params),
        });
    },
    setupController: function(controller,model){
         controller.set('model', model.artwork);
    }
});


App.SitesRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor('application').set('pageImage', 'img/tech_image.jpg').set('pageTitle', ' I code things').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
   model: function() {
      return Ember.RSVP.hash({
         sites: App.Site.findAll(),
      });
   },
   setupController: function(controller, model){
      controller.set('model', model.sites);
   }
});

App.TaggedsitesRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor('application').set('pageImage', 'img/tech_image.jpg').set('pageTitle', ' I code things').set('isPublic', true).set('hasFooter',true).set('hasAbout', true);
   },
   model: function(params) {
      return Ember.RSVP.hash({
         sites: App.Site.findQuery(params),
      });
   },
   setupController: function(controller, model){
      controller.set('model', model.sites);
   }
});

App.ArticleRoute = Ember.Route.extend({
  beforeModel: function(transition){
      if(!App.Article) {
         console.log("What the fuck Ember!");
      }
   },
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('pageTitle', null).set('isPublic', true).set('hasFooter',true).set('hasAbout', false);
      Socialite.load();
   },
   model: function(params){
       return Ember.RSVP.hash({
         article: App.Article.find(params.article_id)
         });
   },
   setupController: function(controller, model){
      controller.set('model', model.article);
   }
});

App.SiteRoute = Ember.Route.extend({
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('pageTitle', null).set('isPublic', true).set('hasFooter',true).set('hasAbout', false);
      Socialite.load();
   },
   model: function(params){
       return Ember.RSVP.hash({
         site: App.Site.find(params.site_id)
         });
   },
   setupController: function(controller, model){
      controller.set('model', model.site);  
   }
});


App.ArtworkRoute = Ember.Route.extend(App.PagecounterMixin,{
    beforeModel: function(transition){
      if(!App.Artwork) {
         console.log("What the fuck Ember!");
      }
   },
   afterModel: function(model) {
      this.controllerFor("application").set('isPublic', true).set('pageImage', null).set('hasFooter',true).set('hasAbout', false);
      this.updateCounter(model);
      setTimeout(dragBind,1000);
      Socialite.load();
   },
   model: function(params){
      return Ember.RSVP.hash({
         artwork: App.Artwork.find(params.artwork_id)
      });
   },
   setupController: function(controller, model){
      controller.set('model', model.artwork);
   },
   serialize: function(model, params) {
    return { artwork_id: model.get('slug') };
  }
});


App.AddartworksNewRoute = Ember.Route.extend(App.TransitionMixin,{
   adminRequired:true,
   beforeModel: function(transition){
     this.restrictedRoute(transition); 
   },
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
    isDirty: function() {
      return this.currentModel.artwork.get('isNew');
    },
    confirmTransition: false,
    initTransition: false,
    model: function() {
        return Ember.RSVP.hash({
            artwork: this.store.createRecord('artwork', {tags:[], auximages:[], mainimageid: null}),
            images: App.Image.findAll(),
            tags: App.Tag.findAll()
        });   
    },
    setupController: function(controller, model) {
        controller.set('model', model.artwork);
        controller.set('images', model.images);
        controller.set('keywords', model.tags);
        
    }
    
});


App.AddarticlesNewRoute = Ember.Route.extend(App.TransitionMixin,{
   beforeModel: function(transition){
     this.restrictedRoute(transition);
     App.Image.findAll();
   },
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
   isDirty: function() {
      return this.currentModel.article.get('isNew');
    },
    confirmTransition: false,
    initTransition: false,
    model: function() {
        return Ember.RSVP.hash({
            article: this.store.createRecord('article', {tags:[], auximages:[], mainimageid: null}),
            images: App.Image.findAll(),
            tags: App.Tag.findAll()
        });   
    },
    setupController: function(controller, model) {
        controller.set('model', model.article);
        controller.set('images', model.images);
        controller.set('keywords', model.tags);
        
    }
    
});

App.AddsitesNewRoute = Ember.Route.extend(App.TransitionMixin,{
   beforeModel: function(transition){
     this.restrictedRoute(transition); 
   },
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
   isDirty: function() {
      return this.currentModel.site.get('isNew');
    },
    confirmTransition: false,
    initTransition: false,
    model: function() {
        return Ember.RSVP.hash({
            site: this.store.createRecord('site', {tags:[], auximages:[], mainimageid: null}),
            images: App.Image.findAll(),
            tags: App.Tag.findAll()
        });   
    },
    setupController: function(controller, model) {
        controller.set('model', model.site);
        controller.set('images', model.images);
        controller.set('keywords', model.tags);
        
    }
});

//EDITING ROUTES

App.EditsiteRoute = Ember.Route.extend(App.TransitionMixin,{
   beforeModel: function(transition){
     this.restrictedRoute(transition); 
   },
   afterModel: function() {
       this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
   isDirty: function() {
      return this.currentModel.site.get('isNew');
    },
   confirmTransition: false,
   initTransition: false,
   model: function(params){
      return Ember.RSVP.hash({
         site: App.Site.find(params.site_id),
         images: App.Image.findAll(),
         tags: App.Tag.findAll()
      });
   },
   setupController: function(controller, model){
      controller.set('model', model.site);
      controller.set('images', model.images);
      controller.set('keywords', model.tags);
   }
});

App.EditartworkRoute = Ember.Route.extend(App.TransitionMixin,{
   beforeModel: function(transition){
     this.restrictedRoute(transition); 
   },
   afterModel: function(model) {
       this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
   isDirty: function() {
      return this.currentModel.artwork.get('isNew');
    },
   confirmTransition: false,
   initTransition: false,
   model: function(params){
      return Ember.RSVP.hash({
         artwork: App.Artwork.find(params.artwork_id),
         images: App.Image.findAll(),
         tags: App.Tag.findAll()
      });
   },
   setupController: function(controller, model){
      controller.set('model', model.artwork);
      controller.set('images', model.images);
      controller.set('keywords', model.tags);
   }
})

App.EditarticleRoute = Ember.Route.extend(App.TransitionMixin,{
   beforeModel: function(transition){
     this.restrictedRoute(transition); 
   },
   afterModel: function() {
       this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
   isDirty: function() {
      return this.currentModel.article.get('isNew');
    },
   confirmTransition: false,
   initTransition: false,
   model: function(params){
      return Ember.RSVP.hash({
         article: App.Article.find(params.article_id),
         images: App.Image.findAll(),
         tags: App.Tag.findAll()
      });
   },
   setupController: function(controller, model){
      controller.set('model', model.article);
      controller.set('images', model.images);
      controller.set('keywords', model.tags);
   }
});

App.EditimagesEditRoute = Ember.Route.extend(App.TransitionMixin,{
   beforeModel: function(transition){
     this.restrictedRoute(transition); 
   },
   confirmTransition: false,
   initTransition: false,
   afterModel: function() {
      this.controllerFor('application').set('pageImage', null).set('isPublic', false).set('hasFooter',false).set('hasAbout', false);
   },
   model: function() {
      return Ember.RSVP.hash({
         newimage: this.store.createRecord('image'),
         images: App.Image.find()   
      });   
   },
   setupController: function(controller, model){
      controller.set('model', model.newimage);
      controller.set('images', model.images);
   }
});

//App.Router.reopen({
//  location: 'history'
//});

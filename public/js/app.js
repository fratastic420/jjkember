//TODOS -> remove default variables in functions bc only firefox likes this and the rest of the browsers are lame

//CONTROLLERS

//Application controller ->
App.ApplicationController = Ember.Controller.extend({
   currentPathDidChange: function() {
      App.set('currentPath', this.get('currentPath'));
   }.observes('currentPath'),
   jaredEmail: function() {
     return 'jared@jaredjkramer.com'; 
   },
   overrideTransition: false,
   mailJared: function() {
     return 'mailto:'+ this.jaredEmail(); 
   }.property('mailJared'),
   jaredAvatar: function() {
      return 'http://www.gravatar.com/avatar/'+ hex_md5(this.jaredEmail()) +'?s=80';
   }.property('jaredAvatar'),
   thisYear: function(){
      return new Date().getFullYear();   
   }.property(),
   konamiCode: false,
   loginFailed: false,
   isProcessing: false,
   isSlowConnection: false,
   timeout: null,
   success: function(){
      this.reset();
      this.set('loginFailed', false);
      $('#loginForm').modal('hide');
   },
   failure: function() {
      this.reset();
      this.set("loginFailed", true);
   },
   slowConnection: function() {
      this.set("isSlowConnection", true);
   },
   reset: function() {
     clearTimeout(this.get("timeout"));
     this.setProperties({isProcessing:false, isSlowConnection: false})
   },
   searchParam: null,
   currentUser: null,
   requiredLength: function() {
      var p = this.get('searchParam');
      if (p == null) {
         p = 0;
      } else p = p.length;
      return p < 5;
   }.property('searchParam'),
   pageTitle: null,
   pageImage: 'img/main_image.jpg',
   isFullAdmin: false,
   isPublic: true,
   hasAbout: true,
   hasFooter: true,
   _token: $('meta[name="csrf-token"]').attr('content'),
   actions: {
      login: function() {
         var controller = this;
         this.setProperties({loginFailed:false, isProcessing:true});
         if ($('input[name="remember"]').is(':checked')) {
            controller.set('remember', true);
         }
         $.ajax({
            type: 'POST',
            url: '/auth/login',
            data: controller.getProperties("email", "password", "_token", "remember"),
            success: function(data) {
               if (data.msg == "Login Successful") {
                  $.cookie('access_token', controller.get('_token'),{expires:1});
                  controller.set('currentUser', data.user).set('isFullAdmin', data.access);
                  controller.success();
               } else controller.failure();
            },
            error: function(data){
               controller.failure();
               if (data.status === 401) {
                  //better error handling?
               }
               if (data.status === 422) {
                 //better error handling?
               }
            }
         });
         
      },
      validate: function() {
        var controller = this,
        token = $.cookie('access_token');
        if (token) {
            $.ajax({
               type: 'POST',
               url: '/auth/verify',
               data: {token: token, laravel_session: this._token},
               success: function(data){
                  if (data.success == true) {
                     $.cookie('access_token', controller.get('_token'), {expires:1});
                     controller.set('currentUser', data.user).set('isFullAdmin', data.access);
                  }
               },
               error: function(data){
                  $.cookie('access_token', null, {expires:-1});
               }
            });
        }  
      },
      triggerKonami: function () {
         this.set("konamiCode", true);
         $('#loginForm').modal('show');
         $('#loginForm').on('shown.bs.modal', function(e) {
            $(this).css({height:"400px"});
         });
      },
      search: function(param) {
         if (param.length && param.length > 4) {
            this.transitionToRoute('search', param);
            this.set('searchParam', "");    
         }
      },
      signOut: function() {
         $.cookie('access_token', null, {expires:1});
         this.setProperties({isFullAdmin: false, currentUser: null});
         window.location = 'auth/logout';
      }
      
   }
});

// !MIXINS!
Ember.KeywordsMixin = Ember.Mixin.create({
   keywordsString : '',
   setKeywordsString: function(string) {
      var kString = this.get('keywordsString');
      if (kstring == '') {
         string = ','+string;
      }
      return this.set('keywordsString', kString+string);
   },
   getKeywords : function() {
      return this.get('keywordsString');
   }.property('keywordsString')  
});

//Update this to slice the arr then push new items, will prolly render better
Ember.LoadMoreMixin = Ember.Mixin.create({
   end: function() {
      return this.get('perPage');
   }.property('perPage'),
   fetchingMore: false,
   sliceContent: null,
   loadingMore: false,
   isLoading: false,
   currentSize: Ember.computed.alias('sliceContent.length'),
   totalCount: function() {
      return this.get('content').get('length');
   }.property('content.@each'),
   hasMore: function() {
      var more = this.get('totalCount') <= this.get('end');
      return more;
   }.property('totalCount', 'end'),
   noMore: function() {
      return this.get('hasMore') === true && this.get('totalCount') > 0; 
   }.property('hasMore', 'totalCount'),
   updatedContent: function (){
      var models = this.get('sortedModel') ? this.get('sortedModel') : this.get('content'), slice, currentEnd = this.get('currentSize'),
      end = this.get('end') ? this.get('end') : 1;
      this.set('sliceContent', models);
      slice = this.get('sliceContent');
      if (end > this.get('totalCount')) end = this.get('totalCount');
      slice = slice.slice(0, end);
      //slice.push(currentEnd, end);
      this.setProperties({'sliceContent': slice,'loadingMore': false, "isLoading": false});
      return slice;  
   }.property('content.@each', 'perPage', 'end', 'sliceContent', 'sortedModel', 'sortProperties'),
   actions: {
      loadMore: function() {
         if (!this.get('loadingMore')) {
            this.set('loadingMore', true);
            var end = this.get('end'); end += this.get('perPage');
            this.setProperties({'end': end, "isLoading": true});   
         }
      }
   }
});


App.AdminbrowseMixin = Ember.Mixin.create({
   destroyRecord: function(record){
      noty({
         text: "<strong>Destroy this record?</strong>",
         layout: "center",
         modal: true,
         buttons: [
            {addClass: "btn btn-default", text: "Cancel", onClick: function($noty){
               $noty.close();
            }     
            },
            {addClass:"btn btn-danger", text: "<i class=\"glyphicon glyphicon-trash\"></i> Delete this!", onClick: function($noty){
                  record.deleteRecord(function() {
                      $noty.close();
                       siteNoty("<strong>Success:</strong> Record was destroyed! On deleteRecord.", "information", "top");
                  }).then(function() {
                     $noty.close();
                     siteNoty("<strong>Success:</strong> Record was destroyed! On then", "information", "top");
                  });
                  $noty.close();
               }   
            }
         ]
      });
   },
   actions: {
      deleteRecord: function(record) {
         this.destroyRecord(record);
      }
   }
});

App.NewtweetMixin = Ember.Mixin.create({
   initTweet: false,
   tweetImage: null,
   currentToken: null,
   sendTweet: function(tweet) {
      
   },
   authenticate: function(credentials) {
      
   },
   verifyTweet: function(tweet) {
      return true;
   },
   actions: {
      commitTweet: function(tweet) {
         if (this.verifyTweet(tweet) && this.currentToken) {
            this.sendTweet(tweet);
         }
      },
      bindImage: function(image){
         
      },
      login: function(){
         
      }
   }
});

App.NewdeviantartMixin = Ember.Mixin.create({
   initDeviant: false,
   currentToken: null,
   sendToStash: function(deviation){
      
   },
   authenticate: function(credentials){
      
   },
   actions: {
      
   } 
});


// ->  I canz probably delete this whole fucking mixin 
//need to pull alot of this out cuz it doesnt work ie, anything that relates to the model, setting and fetching data
App.BasicnewcontrollerMixin = Ember.Mixin.create({
    initCrop: false,
    cropLive: false,
    renderTime: function(time) {
      if (!time) {
         return new Date().toDateString();
      }
      return new Date().getTime();
    },
    currentMainImage: null,
    tagsArr: [],
    auxImagesArr: [],
    initimageid: null,
    curTags: [],
    setTags: function() {
      var t = this.get('curTags');
      this.get('model').set('tags', t);
    }.observes('curTags'),
    setAuthor: function() {
      var cur = this.get('currentUser');
      this.get('model').set('author', cur).set('timestamp', this.renderTime(false));
    },
    createHeaderName: function (img){
      var path = img.imagepath, curTime = this.renderTime(true), ext = path.substr(path.lastIndexOf(".")), filename = path.substr(path.lastIndexOf("/") + 1), deviateName = this.get('deviateName');
      path = path.replace(filename,"");
      return path+filename.replace(ext, "")+"_"+curTime+deviateName+ext;
    },
    resetMainImage: function(destroy){
      var controller = this,  model = controller.get('model');
      controller.set('currentMainImage', null);
      model.set('mainimage', null).set('mainimageid', null);
    },
    commitMainCrop: function(img) {
      if (this.currentMainImage != null) {
         var upload = this.store.createRecord('upload', {}),
         uploaddata = $('#editedImage').attr('src'),
         newname = this.createHeaderName(img), controller = this, article;
         if (uploaddata.indexOf('uploads/') !== -1) return alert("Image not edited");
         upload.set('uploaddata', $('#editedImage').attr('src')).set('uploadname', img.id).set('uploadpath', newname).set('uploadtype', img.uploadtype).set('uploadthumb', img.thumbpath)
         .set('uploadoperation', 'header').set('uploadwidth', this.mainImageSize.width).set('uploadheight', this.mainImageSize.height);
         upload.save().then(function(){
            article = controller.get('model');
            article.set('mainimage', newname);
            //article.set('mainimageid', img.id);
         });
      }else {
           siteNoty("<strong>Error:</strong> No image selected", "error", "center");
      } 
      return true;
   },
   upDateTags: function() {
      try {
         this.get('keywords').reload();
      } catch (err) {
         console.log(err);
      }
   },
   resetModel: function(route) {
      if (route) {
         this.transitionToRoute(route);
      }  else {
         this.transitionToRoute(App.get('currentPath'));
      }
   },
   initEvents: function() {
     this.initTags();
   },
   initTags: function() {
      var tags = this.get('content').get('tags');
      this.set('curTags', tags);
   },
   actions: {
      createArticle: function() {
         var controller = this;
         var article = controller.get('model');
         article.set('tags', this.get('curTags'));
         article.save().then(function(){
            article.set('isDirty', false);
            siteNoty("<strong>Success!</strong> Article was succesfully saved.", "success", "center");
            if (siteNoty) controller.resetModel();
         });
       },
       upDateImages: function() {
        this.get("images").reload();
       },
       resetMainImg: function() {
         this.resetMainImage(true);
       },
       resetArticle: function() {
        this.resetModel();
       },
       addAuxImage: function(image) {
         curAux = this.get('auxImagesArr'), is = objectInArr(curAux, image, 'id', image.get('id'));
         if (is == null) {
             this.get('auxImagesArr').pushObject(image);
              this.get('model').set('auximages', this.auxImagesArr);
         }    
       },
       removeAuxImage: function(image) {
         curAux = this.get('auxImagesArr'), is = objectInArr(curAux, image, 'id', image.get('id'));
         if (is != null) {
           this.auxImagesArr.splice(is, 1);
           this.get('model').set("auximages", this.auxImagesArr);
         }
       },
       chooseMainImage: function(image){
         var article = this.get('model'), curImage, params;
         this.store.find('image', image.id).then(function(selectedimage) {
            if (isNaN(selectedimage)) {
              selectedimage = image._data.id; 
            }
            article.set('mainimageid', selectedimage);
         });
         if (this.initCrop) $('.img-container img').cropper('disable');     
         curImage = this.currentMainImage ? this.currentMainImage : {};
         curImage = {id : image.id, thumbpath : image.get('thumbpath'), imagepath: image.get('imagepath'), imagetype: image.get('imagetype') };
         this.set('currentMainImage', curImage);
         $('#editImage').attr('src', this.currentMainImage.imagepath+'?t='+this.renderTime());
         $('#editedImage').attr('src', this.currentMainImage.imagepath+'?t='+this.renderTime());
         if (this.initCrop === false && this.currentMainImage != {}) {
            params = {ratio : (this.mainImageSize.width / this.mainImageSize.height), minH: this.mainImageSize.height, minW: this.mainImageSize.width, resize: false};
            this.cropLive = this.initCrop = initCropper(params);   
         }else if(this.currentMainImage) $('.img-container img').cropper('enable');
       },
       addTag: function() {
         if ($('#txtAddTag').val()) {
            var tag = this.store.createRecord('tag', {}), tags = this.get('tags'), controller;
            tag.set("name", $('#txtAddTag').val());
            controller = this;
            tag.save().then(function() {
               this.upDateTags();
               $('#txtAddTag').val('');
            });
         }else {
            siteNoty("<strong>Error:</strong> No Value for Tag", "error", "center");
         }
         
       },
       getTags: function() {
         
       }
    }
});

// END MIXINS


App.IndexController = Ember.ArrayController.extend({
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
});


App.SearchController = Ember.ArrayController.extend({
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   sortedArtworks: Ember.computed.sort('artworks', 'sortProperties'),
   sortedSites: Ember.computed.sort('sites', 'sortProperties'),
   totalArticles:  Ember.computed.alias('sortedModel.length'),
   totalArt:  Ember.computed.alias('sortedArtworks.length'),
   totalSites:  Ember.computed.alias('sortedSites.length'),
   totalResults : function() {
      return this.get('totalArt') + this.get('totalArticles') + this.get('totalSites');
   }.property('totalArt', 'totalArticles', 'totalSites'),
   hasSites: function() {
      return this.get('totalSites') > 0;
   }.property('totalSites'),
   hasArt: function() {
      return this.get('totalArt') > 0;
   }.property('totalArt'),
   hasArticles: function() {
      return this.get('totalArticles') > 0;
   }.property('totalArticles')
});

App.ArticlesController = Ember.ArrayController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin, {
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   perPage:1,
});

App.ArticlesearchController = Ember.ArrayController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin, {
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   perPage:2
});

App.TaggedarticlesController = Ember.ArrayController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin, {
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
});

App.ArtworksController = Ember.ObjectController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel:  Ember.computed.sort('model', 'sortProperties'),
   perPage: 12,
   actions: {
      switchSort: function(column){
         this.set('sortProperties', [column]);
         //$('.btn[data-sort="'+column+'"]').trigger('click');
      }
   }
});

App.ArtsearchController = Ember.ObjectController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   perPage: 12
});

App.TaggedartworksController = Ember.ObjectController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   perPage: 12
});

App.ArtthumbController = Ember.ObjectController.extend(App.AdminbrowseMixin, {
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin')
});

App.ArticleController = Ember.ObjectController.extend(Ember.KeywordsMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.not('controllers.application.isFullAdmin'),
});

App.SitesController = Ember.ObjectController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   perPage:5
});

App.SitesearchController = Ember.ObjectController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   sortProperties: ['timestamp:desc'],
   sortedModel: Ember.computed.sort('model', 'sortProperties'),
   perPage:5
});

App.TaggedsitesController = Ember.ObjectController.extend(Ember.LoadMoreMixin, App.AdminbrowseMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
   perPage: 5
});

App.ArtworkController = Ember.ObjectController.extend(Ember.KeywordsMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin'),
});

App.SiteController = Ember.ObjectController.extend(Ember.KeywordsMixin,{
   needs:['application'],
   isFullAdmin:Ember.computed.alias('controllers.application.isFullAdmin')
});



//Toolbar Controller
App.ToolbarController = Ember.ObjectController.extend({
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.alias('controllers.application.isFullAdmin'),
   actions: {
   
   }
});

//Mixin for aux images
App.AuximagesMixin = Ember.Mixin.create({
   auxImagesArr: [],
   actions: {
      addAuxImage: function(image) {
         var id = image.get('id') ? image.get('id') : image._data.id,
         curAux = this.get('auxImagesArr');
         var is = objectInArr(curAux, image, 'id', id);
         if (is == null) {
            image.set('id', id); 
            this.get('auxImagesArr').pushObject(image);
            this.get('model').set('auximages', this.auxImagesArr);
         }    
       },
       removeAuxImage: function(image) {
         curAux = this.get('auxImagesArr');
         var is = objectInArr(curAux, image, 'id', image.get('id'));
         if (is != null) {
           this.auxImagesArr.splice(is, 1);
           this.get('model').set('auximages', this.auxImagesArr);
         }
       }
   }
});

//Mixin for Tags
App.TagsarrMixin = Ember.Mixin.create({
   tagsArr: [],
   curTags: [],
   setTags: function() {
     var t = this.get('curTags');
     this.get('model').set('tags', t);
   }.observes('curTags'),
   initEvents: function() {
     this.initTags();
   },
   initTags: function() {
      var tags = this.get('content').get('tags');
      this.set('curTags', tags);
   },
   upDateTags: function() {
      this.get('tags').reload() || this.get('tags').reload();
   },
   actions: {
      addTag: function() {
         if ($('#txtAddTag').val()) {
            var tag = this.store.createRecord('tag', {});
            tag.set('name', $('#txtAddTag').val());
            var controller = this;
            tag.save().then(function() {
               controller.upDateTags();
               $('#txtAddTag').val('');
            });
         }else {
            siteNoty("<strong>Error:</strong> No Value for Tag", "error", "center");
         }
         
       },
       getTags: function() {
         this.upDateTags();
       }
   }
});

//Mixin for Image manipulation
App.ImageutilsMixin = Ember.Mixin.create({
   initimageid: null,
   initCrop: false,
   cropLive: false,
   headerName: '_HEADER',
   mainImageSize: {height: 300, width: 300},
   currentMainImage: null,
   createHeaderName: function(img){
      var path = img.imagepath, curTime = this.renderTime(true), ext = path.substr(path.lastIndexOf(".")), filename = path.substr(path.lastIndexOf("/") + 1);
      path = path.replace(filename,"");
      return path+filename.replace(ext, "")+"_"+curTime+this.get('headerName')+ext; 
   },
   resetMainImage: function(destroy) {
     var model = this.get('model');
     this.set('currentMainImage', null);
     model.set('mainimage', null).set('mainimageid', null);
     
   },
   commitMainCrop: function(img) {
      if (this.currentMainImage != null) {
         var upload = this.store.createRecord('upload', {}),
         uploaddata = $('#editedImage').attr('src'),
         newname = this.createHeaderName(img), controller = this;
         if (uploaddata.indexOf('uploads/') !== -1) siteNoty("<strong>Warning!</strong> Image not edited.", "warning", 'top');
         upload.set('uploaddata', $('#editedImage').attr('src')).set('uploadname', img.id).set('uploadpath', newname).set('uploadtype', img.uploadtype).set('uploadthumb', img.thumbpath)
         .set('uploadoperation', 'header').set('uploadwidth', this.mainImageSize.width).set('uploadheight', this.mainImageSize.height);
         upload.save().then(function(){
            var article = controller.get('model');
            article.set('mainimage', newname);
         });
      }else {
           siteNoty("<strong>Error:</strong> No image selected", "error", "center");
      } 
      return true;
   },
   actions: {
      upDateImages: function() {
        this.get("images").reload();
       },
       resetMainImg: function() {
         this.resetMainImage(true);
       },
       chooseMainImage: function(image){ 
         var article = this.get('model'),
         id = image.get('id') ? image.get('id') : image._data.id;
         this.store.find('image', id).then(function(selectedimage) {
            selectedimage.set('id', id);
            article.set('mainimageid', selectedimage);
         });
         if (this.initCrop) $('.img-container img').cropper('disable');     
         var curImage = this.currentMainImage ? this.currentMainImage : {};
         curImage = {id : id, thumbpath : image.get('thumbpath'), imagepath: image.get('imagepath'), imagetype: image.get('imagetype') };
         this.set('currentMainImage', curImage);
         $('#editImage').attr('src', this.currentMainImage.imagepath+'?t='+this.renderTime());
         $('#editedImage').attr('src', this.currentMainImage.imagepath+'?t='+this.renderTime());
         if (this.initCrop === false && this.currentMainImage != {}) {
            var params = {ratio : (this.mainImageSize.width / this.mainImageSize.height), minH: this.mainImageSize.height, minW: this.mainImageSize.width, resize: false};
            this.cropLive = this.initCrop = initCropper(params);   
         } else if(this.currentMainImage) $('.img-container img').cropper('enable');
         
       }
   }
});


//MiscUtilsMixin
App.MiscutilsMixin = Ember.Mixin.create({
   currentUser: null,
   renderTime: function(time) {
     if(!time) {
         return new Date().toDateString();
     }
     return new Date().getTime();
   },
   setAuthor: function() {
      var cur = this.get('currentUser');
      this.get('model').set('author', cur).set('timestamp', this.renderTime(false));
   }
});


//Photoeditor controller -> Finished!
App.EditimagesEditController = Ember.ObjectController.extend(Ember.Evented, App.AdminbrowseMixin, {
   needs: ['application'],
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   fullPerm: Ember.computed.alias('controllers.application.isFullAdmin'),
   //isAdmin: Ember.computed('controllers.application.isFullAdmin'),
   renderTime: function(){
      return new Date().getTime();   
   },
   currentImage: null,
   imageDirty: false,
   hasImage: function() {
      if (this.get('currentImage') == null) {
         $('.imageFunc').attr('disabled', 'disabled');
      }
      $('.imageFunc').removeAttr('disabled');
      return false;
   }.observes('currentImage'),
   actions: {
      upDateImages: function() {
         this.get("images").reload();
      },
      commitImage: function(img) {
         if (this.currentImage != null) {
            var upload = this.store.createRecord('upload', {});
            var uploaddata = $('#editedImage').attr('src');
            if (uploaddata.indexOf('uploads/') !== -1) siteNoty("<strong>Warning!:</strong> Image not edited", "warning", "top");
            else {
               upload.set('uploaddata', $('#editedImage').attr('src')).set('uploadname', img.id).set('uploadpath', img.imagepath).set('uploadtype', img.uploadtype).set('uploadthumb', img.thumbpath).set('uploadoperation', 'update');
               var controller = this;
               upload.save().then(function() {
                  $('.updateImages').trigger('click');   
               });
            }
            
         }else {
            siteNoty("<strong>Error:</strong> No Image selected", "error", "center");
         } 
      },
      chooseImage: function(image) {
         var curImage = this.currentImage ? this.currentImage : {};
         curImage = {id : image.id, thumbpath : image.get('thumbpath'), imagepath: image.get('imagepath'), imagetype: image.get('imagetype') };
         this.set('currentImage', curImage);
         $('.toggleCrop').removeClass('disabled').removeClass("active");
         //Had to put this in when BIND-ATTR WAS FAILING TO UPDATE SRC
         $('#editImage').attr('src', this.currentImage.imagepath+'?t='+this.renderTime());
         $('#editedImage').attr('src', this.currentImage.imagepath+'?t='+this.renderTime());
      },
      resetImg: function() {
         resetImage(this.currentImage);
         cropDestroy();
      }  
   }
});


//ARTWORKS
App.AddartworksNewController = Ember.ObjectController.extend(Ember.Evented, Ember.KeywordsMixin, App.AuximagesMixin, App.TagsarrMixin, App.ImageutilsMixin, App.MiscutilsMixin, {
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   headerName: '_MAINART',
   mainImageSize: {height: 300, width:300},
   resetModel: function() {
      this.resetMainImage();
      this.set('curTags', []);
      this.set('auxImagesArr',[]);
      this.controllerFor('application').set('overrideTransition', true);
      App.Artwork.reload();
      this.transitionTo('artworks');   
   },
   actions: {
      createArticle: function() {
         var controller = this;
         var article = controller.get('model');
         article.set('tags', this.get('curTags'));
         article.save().then(function(){
            article.set('isDirty', false);
            siteNoty("<strong>Success!</strong> Artwork was succesfully saved.", "success", "center");
            if (siteNoty) controller.resetModel();
         });
       },
       resetArticle: function() {
         this.resetMainImage();
         this.set('curTags', []);
         this.set('auxImagesArr',[]);
         this.resetModel();
       },
    } 
});

App.EditartworkController = Ember.ObjectController.extend(Ember.Evented, Ember.KeywordsMixin, App.AuximagesMixin, App.TagsarrMixin, App.ImageutilsMixin, App.MiscutilsMixin, {
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   mainImageSize: {height: 300, width: 300},
   headerName: '_MAINART',
   resetModel: function() {
      this.resetMainImage();
      this.set('curTags', []);
      this.set('auxImagesArr',[]);
      this.controllerFor('application').set('overrideTransition', true);
      App.Artwork.reload();
      this.transitionTo('artworks');   
   },
   actions: {
      createArticle: function() {
         var controller = this,
         article = controller.get('model');
         article.set('tags', this.get('curTags'));
         article.save().then(function() {
            article.set('isDirty', false);
            siteNoty('<strong>Succeess!</strong> Artwork was successfully saved.', "success", "center");
            if (siteNoty) controller.resetModel();
         });
      },
      resetArticle: function() {
         this.resetMainImage();
         this.set('curTags', []);
         this.set('auxImagesArr', []);
         this.resetModel();
      }
   }
});


////ARTICLES
App.AddarticlesNewController = Ember.ObjectController.extend(Ember.Evented, App.AuximagesMixin, App.TagsarrMixin, App.ImageutilsMixin, App.MiscutilsMixin, {
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   headerName: '_HEADER',
   mainImageSize: {height: 287, width:947},
   resetModel: function() {
      this.resetMainImage();
      this.set('curTags', []);
      this.set('auxImagesArr',[]);
      this.controllerFor('application').set('overrideTransition', true);
      App.Article.reload();
      this.transitionTo('articles');
   },
   actions: {
      createArticle: function() {
         var controller = this,
         curImg = this.get('currentMainImage');
         var article = controller.get('model');
         article.set('tags', this.get('curTags'));//.set('mainimageid', curImg.id);
         article.save().then(function(){
            article.set('isDirty', false);
            siteNoty("<strong>Success!</strong> Article was succesfully saved.", "success", "center");
            if (siteNoty) controller.resetModel();
         });
       },
       resetArticle: function() {
        this.resetModel();
       },
       
    } 
});


App.EditarticleController = Ember.ObjectController.extend(Ember.Evented, App.AuximagesMixin, App.TagsarrMixin, App.ImageutilsMixin, App.MiscutilsMixin, {
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   headerName: '_HEADER',
   mainImageSize: {height: 287, width:947},
   resetModel: function() {
      this.resetMainImage();
      this.set('curTags', []);
      this.set('auxImagesArr',[]);
      this.controllerFor('application').set('overrideTransition', true);
      App.Article.reload();
      this.transitionTo('articles');
   },
   actions: {
      createArticle: function() {
         var controller = this,
         curImg = this.get('currentMainImage');
         var article = controller.get('model');
         article.set('tags', this.get('curTags'));//.set('mainimageid', curImg.id);
         article.save().then(function(){
            article.set('isDirty', false);
            siteNoty("<strong>Success!</strong> Article was succesfully saved.", "success", "center");
            if (siteNoty) controller.resetModel();
         });
       },
       resetArticle: function() {
        this.resetModel();
       },
       
    }
});



//SITES
App.AddsitesNewController = Ember.Controller.extend(Ember.Evented, App.AuximagesMixin, App.TagsarrMixin, App.ImageutilsMixin, App.MiscutilsMixin, {
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   headerName: '_SITEHEADER',
   mainImageSize: {height: 150, width:150},
   upDateTags: function() {
     this.get("keywords").reload() || this.get('tags').reload(); 
   },
   resetModel: function() {
      this.resetMainImage();
      this.set('curTags', []);
      this.set('auxImagesArr',[]);
      this.controllerFor('application').set('overrideTransition', true);
      App.Site.reload();
      this.transitionTo('sites');
   },
   actions: {
      createArticle: function() {
         var controller = this, article = controller.get('model');
         article.set("tags", this.get('curTags'));
         article.save().then(function(){
            article.set('isDirty', false);
            siteNoty("<strong>Success!</strong> Site was succesfully saved.", "success", "center");
            if (siteNoty) controller.resetModel();
         });
       },
       
       resetArticle: function() {
        this.resetModel();
       },
    } 
});


App.EditsiteController = Ember.Controller.extend(Ember.Evented, App.AuximagesMixin, App.TagsarrMixin, App.ImageutilsMixin, App.MiscutilsMixin, {
   needs: ['application'],
   currentUser: Ember.computed.alias('controllers.application.currentUser'),
   isFullAdmin: Ember.computed.not('controllers.application.isFullAdmin'),
   headerName: '_SITEHEADER',
   mainImageSize: {height: 150, width:150},
   upDateTags: function() {
     this.get("keywords").reload() || this.get('tags').reload(); 
   },
   resetModel: function() {
      this.resetMainImage();
      this.set('curTags', []);
      this.set('auxImagesArr',[]);
      this.controllerFor('application').set('overrideTransition', true);
      App.Site.reload();
      this.transitionTo('sites');
   },
   actions: {
      createArticle: function() {
         var controller = this, article = controller.get('model');
         article.set("tags", this.get('curTags'));
         article.save().then(function(){
            article.set('isDirty', false);
            siteNoty("<strong>Success!</strong> Site was succesfully saved.", "success", "center");
            if (siteNoty) controller.resetModel();
         });
       },
       resetArticle: function() {
        this.resetModel();
       },
       
    } 
});

//Uploader works!!!! (Just need to complete the PHP handler yo! And I did, cuz I am fucking awesome)
App.UploaderController = Ember.Controller.extend(DropletController, {
    needs: ['AddarticlesNew', 'Application'],
    dropletUrl: 'api/upload',
    useArray: true,
    mimeTypes: ['image/bmp'],
    concatenatedProperties: ['mimeTypes'],
    didUploadFiles: function(response) {  
      $('.updateImages').trigger('click');    
    }

});

App.UploaderView = Ember.View.extend({
    DragDrop: DropletView.extend() 
});



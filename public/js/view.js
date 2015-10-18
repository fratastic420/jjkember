
App.ApplicationView = Ember.View.extend(Ember.TargetActionSupport, {
   needs: ['controller'],
   didInsertElement: function() {
      //this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   fireDOMElements: function() {
      bindKonami();
      justTheTip();
      this.triggerAction({action:'validate', target: this.controller});
   },
   actions: {
      bookmarkThis: function() {
         bookmarkMe();
      }
   }
});


App.JqueryMixin = Ember.Mixin.create({
  bindDrag: function() {
      $(document).arrive('.draggable', function() { 
        dragBind();
      });
   },
   bindLightbox: function(){
     $(document).arrive(".lightbox", function() {
		var elem = $(this), elemID, instance;
		elemID = elem.data('lightbox');
        instance = lightBox('a.lightbox[data-lightbox="'+elemID+'"]');  
	});
     return true;
   },
   observeModel: function() {
     
   }.observes('controller.updatedContent, content'),
   setupLightBox: function(){
      this.bindLightbox();  
   },
   destroyLightBox: function(){
     $(document).unbindArrive('.lightbox'); 
   },
   destroyDrag: function() {
      $(document).unbindArrive('.draggable');
   },
   setupTextFit: function() {
      $(document).arrive('.fittext', function() {
         var elem = $(this);
         fitText(elem);
      });
   },
   destroyTextFit: function() {
      $(document).unbindArrive('.fittext');
   },
   bindTip: function() {
      $(document).arrive('[rel="tooltip"],[data-rel="tooltip"],.tooltipme', function() {
         justTheTip();
      });
   },
   destroyTip: function() {
     $(document).unbindArrive('[rel="tooltip"],[data-rel="tooltip"]'); 
   },
   initJqueryEvents: function() {
      this.setupTextFit();
      this.setupLightBox();
      this.bindDrag();
      this.bindTip();
   },
   destroyJqueryEvents: function() {
      this.destroyLightBox();
      this.destroyDrag();
      this.destroyTextFit();
      this.destroyTip();
   }
});

App.LoadmoreViewMixin = Ember.Mixin.create( {
   setupLoadMoreListener: function() {
      $(document).on('scroll', $.proxy(this.fireScroll, this));
      if (this.inViewport()) {
        var controller = this.get('controller'),
        t = this,
        interval = setInterval(function(){
          controller.send('loadMore');
          if (!t.inViewport()) {
           clearInterval(interval);
          }
        },500, t, controller, interval);
      }
   },
   destroyLoadMoreListener: function() {
      $(document).off('scroll', $.proxy(this.fireScroll, this));
   },
   disabled: function() {
      controller = this.get('controller');
      return controller.get('hasMore');
   },
   isLoading: function() {
     controller = this.get('controller');
     return controller.get('isLoading');
   },
   fireScroll: function() {
      if (this.inViewport() === true && !this.disabled() && !this.isLoading()) {
         var controller = this.get('controller');
         setTimeout(function(controller) {
            controller.send('loadMore');
         }, 1000, controller);
      }else if (this.disabled()) {
         this.destroyLoadMoreListener();
      }
   },
   inViewport: function()
   {
      var el = this.get('elementWatch') ? this.get('elementWatch') : $('.loadMore');
      if (el.length < 1) {
         return false;
      }
      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
   },
   atPageBottom: function() {
      var doc = $(document).height(),
      fHeight = $('footer').height() ? $('footer').height() : 0,
      winHeight = $(window).height(),
      scrollpos = $(document).scrollTop(),
      pos = (doc-scrollpos-fHeight-100);
      return(winHeight > pos)  
   }
});



App.IndexView = Ember.View.extend({
   needs: ['controller'],
   attributeBindings: ["data-id", "data-large", "data-original", "data-src"],
   didInsertElement: function() {
      this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
      
   },
   fireDOMElements: function() {
     
   }
});

App.SearchView = Ember.View.extend({
   needs:['controller'],
   didInsertElement: function(){
      //this._super;
      //this.initJqueryEvents();
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   fireDOMElements: function() {
      $('.searchresults a').on('click', function(e){
         e.preventDefault();
         setTimeout(fitText, 500)
      });
   }
});


App.ArticlesView = Ember.View.extend(App.LoadmoreViewMixin, App.JqueryMixin,{
   needs:['controller'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   classNames: ["container"],
   didInsertElement: function() {
      //this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   willDestroyElement: function(){
      this.destroyLoadMoreListener();
      this.destroyJqueryEvents();
   },
   fireDOMElements: function() {
      fitText();
      this.setupLoadMoreListener();
      this.initJqueryEvents();
     // bindDOMEvents();
   }
});

App.TaggedarticlesView = Ember.View.extend(App.LoadmoreViewMixin, App.JqueryMixin, {
   needs:['controller'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   willDestroyElement: function() {
      this.destroyJqueryEvents();
   },
   fireDOMElements: function() {
      fitText();
      this.initJqueryEvents();
      this.setupLoadMoreListener();
     // bindDOMEvents();
   }
});



App.SitesView = Ember.View.extend(App.LoadmoreViewMixin, App.JqueryMixin,{
   needs:['controller'],
   classNames: ['col-sm-9'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   didInsertElement: function() {
      //this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   willDestroyElement: function() {
     this.destroyJqueryEvents(); 
   },
   fireDOMElements: function() {
      fitText();
      this.initJqueryEvents();
     
   }
});

App.TaggedsitesView = Ember.View.extend(App.LoadmoreViewMixin, App.JqueryMixin,{
   needs:['controller'],
   classNames: ['col-sm-9'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   didInsertElement: function() {
      //this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
    willDestroyElement: function() {
     this.destroyJqueryEvents(); 
   },
   fireDOMElements: function() {
       fitText();
       this.initJqueryEvents();
       this.setupLoadMoreListener();
   }
});

App.ArtworksView = Ember.View.extend(App.LoadmoreViewMixin, {
   tagName:'section',
   classNames: ['col-sm-9'],
   needs:['controller'],
   attributeBindings: ["data-id", "data-large", "data-original", "data-src"],
   didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   fireDOMElements: function() {
       fitText();
       this.setupLoadMoreListener();
   } 
});

App.ArtsearchView = Ember.View.extend(App.LoadmoreViewMixin, {
   needs:['controller'],
   attributeBindings: ["data-id", "data-large", "data-original", "data-src"],
   didInsertElement: function() {
     // this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   fireDOMElements: function() {
       fitText();
       this.setupLoadMoreListener();
   } 
});

App.TaggedartworksView = Ember.View.extend(App.LoadmoreViewMixin,{
   needs:['controller'],
   classNames: ['col-sm-9'],
   attributeBindings: ["data-id", "data-large", "data-original", "data-src"],
   didInsertElement: function() {
      //this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   fireDOMElements: function() {
       fitText();
     // bindDOMEvents();
     this.setupLoadMoreListener();
      
   } 
});


App.ArticleView = Ember.View.extend(App.JqueryMixin,{
   emberDisqus : true,
   needs:['controller'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   didInsertElement: function() {
      //this._super;
      this.initJqueryEvents();
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   willDestroyElement: function() {
     this.destroyJqueryEvents(); 
   },
   fireDOMElements: function() {
      fitText();
   }
});

App.SiteView = Ember.View.extend(App.JqueryMixin,{
   needs:['controller'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   didInsertElement: function() {
      //this._super;
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   willDestroyElement: function() {
     this.destroyJqueryEvents(); 
   },
   fireDOMElements: function() {
      fitText();
      this.initJqueryEvents();
   }
});

App.ArtworkView = Ember.View.extend(App.JqueryMixin,{
   needs:['controller'],
   attibuteBindings: ["data-id", "data-large", "data-original", "data-src", "alt", "src", "data-lightbox"],
   didInsertElement: function() {
      //this._super;
      this.initJqueryEvents();
      Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   willDestroyElement: function() {
      //this.destroyJqueryEvents();
   },
   fireDOMElements: function() {
      
   }
});



App.ArtworkDetailsComponent = Ember.Component.extend(App.JqueryMixin,{
   didInsertElement: function() {
       this.initJqueryEvents();
       justTheTip();
   },
   willDestroyElement: function() {
      //this.destroyJqueryEvents(); 
   },
   seemore: true,
   actions: {
      expandDesc: function() {
         if (this.seemore) this.set('seemore', false); else this.set('seemore', true);
      }
   } 
});

App.ArtthumbView= Ember.View.extend({
  classNames: ["col-sm-6", "col-md-4"],
  eventManager: Ember.Object.create({
      mouseEnter: function(event, view){
      el = $('#'+view.elementId), w = el.find('img').width(), c = el.find('.caption');
      c.addClass('collapse-in').removeClass('collapse').css({'min-width':w+"px", "max-width":w+"px"});  
      },
      mouseLeave: function(event, view){
         el = $('#'+view.elementId),c = el.find('.caption').addClass('collapse').removeClass('collapse-in');
      }    
   })
});



App.ToolbarView = Ember.View.extend({
   actions: {
      toggleTray: function() {
            var el = $('.tray-tools');
            el.css({'width': el.width()}).animate({'width':'toggle'}, 'slow', 'easeOutBounce');
         }
        
      }
});


App.BasicnewviewMixin = Ember.Mixin.create({
   fireDOMElements: function() {
      //bindDOMEvents();
      view = this;
      this.controller.setAuthor();
      $('.trayToggle').trigger('click');
   },
   initImage: null,
    waitToFireImage: function() {
      if (this.initImage.isLoaded === true) {
         this.controller.send('chooseMainImage', this.initImage);
      }
   }.observes('initImage.isLoaded'),
   resetSteps: function(all) {
      $('.mainImagestep-2').addClass('disabled').removeClass('btn-success').find('i').addClass('hide');
      $('.mainImagestep-3').addClass('disabled').removeClass('btn-success').find('i').addClass('hide');
      $('#btnCommitImage').addClass('hide');
      if (all) {
        $('.mainImagestep-1').removeClass('btn-success').find('i').addClass('hide');
      }
   },
   resetImage: function () {
      this.controller.resetMainImage();
      if(this.controller.initCrop)$('.img-container img').cropper('disable');
      $('#btnCommitCrop').addClass('hide');
      this.resetSteps(true);
   },
   changeMainImage: function(){  //Had to tie cropper events to controller since data was being manipulated
      var curImage = this.controller.currentMainImage;
      if (curImage != {}) {
         $('#btnCommitCrop').removeClass('hide');
         $('.mainImagestep-1').addClass('btn-success').find('i').removeClass('hide');
         this.resetSteps();
      }
   }.observes('controller.currentMainImage'),
   attributeBindings: ["data-id", "data-large", "data-original", "data-rel"],
   refreshImages: function() {
      //this.rerender();
   }.observes('controller.renderTime'),
   currentEmbedURL : null,
   getEmberURL: function(image){
      this.set("currentEmbedURL", "http://www.jaredjkramer.com"+image.get('imagepath'));
   },
   watchEmbedURL: function() {
      $('.emdedURLModal').modal("show");
   }.observes('currentEmbedURL'),
   actions: {
      resetMainImg: function() {
         this.resetImage();  
      },
      // need to change this element
      previewArticle: function() {
         var el = $('.modelPreview');
         el.css({'height':el.height()}).animate({'height':'toggle'}, 'slow', 'easeOutBounce');
      },
      toggleMainImageTray: function() {
        var el = $('.mainimageTray');
        el.css({'height':el.height()}).animate({'height':'toggle'}, 'slow', 'easeOutBounce');   
      },
      toggleAuxImageTray: function() {
         var el = $('.auximageTray');
         el.css({'height':el.height()}).animate({'height':'toggle'}, 'slow', 'easeOutBounce');
      },
      toggleEmbedImageTray: function() {
         var el = $('.embedimageTray');
         el.css({'height':el.height()}).animate({'height':'toggle'}, 'slow', 'easeOutBounce');
      },
      commitCrop: function(image) {
         $('.img-container img').cropper('disable');
         var imageObj = getImgArgs($('#btnCommitCrop')),
         options = {}, newEl;
         if (crop_api) {
            options.rect = {left: crop_api.x1, top: crop_api.y1, width:crop_api.w, height:crop_api.h};
            newEl = pixastic(imageObj, options);
         }
         this.controller.cropLive = false;
         $('#btnCommitCrop').addClass('hide');
         $('.mainImagestep-2').removeClass('disabled').addClass('btn-success').find('i').removeClass('hide');
         $('#btnCommitImage').removeClass('hide');      
      },
      commitImage: function(image) {
         $('#btnCommitImage').addClass('hide');
         $('.mainImagestep-3').removeClass('disabled').addClass('btn-success').find('i').removeClass('hide');
         this.controller.commitMainCrop(image);
      }
   } 
});

App.AddartworksNewView = Ember.View.extend(App.BasicnewviewMixin, {
   needs: ['controller'],
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   }
   
   
});


App.AddarticlesNewView = Ember.View.extend(App.BasicnewviewMixin, {
   needs: ['controller'],
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   }
});


App.AddsitesNewView = Ember.View.extend(App.BasicnewviewMixin, {
   needs: ['controller'],
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   }
});

App.EditartworkView = Ember.View.extend(App.BasicnewviewMixin, Ember.TargetActionSupport, {
   needs: ['controller'],
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
     this.controller.initEvents();
     this.set("initImage",  this.controller.get('model').get('mainimageid'));
   }
});

App.EditarticleView = Ember.View.extend(App.BasicnewviewMixin, Ember.TargetActionSupport,{
   needs: ['controller'],
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
     this.controller.initEvents();
     this.set("initImage",  this.controller.get('model').get('mainimageid'));
   }
});

App.EditsiteView = Ember.View.extend(App.BasicnewviewMixin,Ember.TargetActionSupport, {
   needs: ['controller'],
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
     this.controller.initEvents();
     this.set("initImage",  this.controller.get('model').get('mainimageid')); 
   }
});

App.EditimagesEditView = Ember.View.extend({
   needs: ['controller'],
   cropLive: false,
   initCrop: false,
   didInsertElement: function() {
     this._super;
     Ember.run.scheduleOnce('afterRender', this, 'fireDOMElements');
   },
   fireDOMElements: function() {
     bindDOMEvents();
     imageFunction();
     $('.imageFunc').attr('disabled', 'disabled');
     $('.trayToggle').trigger('click');
   },
   updateCrop: function() { //Updates when images is selected
     if (this.initCrop === true) {
      $('.selectCrop').removeClass('active');
      $('.img-preview img').attr('src', this.controller.currentImage.imagepath);
      this.disableCrop();
     }
   }.observes('controller.currentImage'),
   enableCrop : function () {
      $('.img-container img').cropper('enable', function() {   
         $('.commitCrop').removeClass('disabled');
         $('.selectCrop').addClass('active');
      });
      this.set('cropLive', true);
   },
   disableCrop: function () {
      if (this.get('cropLive')) {
         $('.img-container img').cropper('disable');
         $('.commitCrop').addClass('disabled').removeClass('active');
         this.set('cropLive' , false);   
      }
   },
   attributeBindings: ["data-id", "data-large", "data-original"],
   refreshImages: function() {
      this.rerender();
   }.observes('controller.renderTime'),
   actions: {
      openTray: function() {
         var el = $('.imageTrayBottom');
         el.css({'height': el.height()}).animate({'height':'toggle'}, 'slow', 'easeOutBounce');
      },
      killCrop: function() {
         if (this.initCrop) {
            this.disableCrop();
         }
      },
      selectCrop: function(image) {
         var active = $('.selectCrop').hasClass('active');
         if(this.initCrop === false) {
            initCropper();
            this.initCrop = true;
            this.cropLive = true;
         }else if (this.initCrop === true && this.cropLive === false) {
           this.enableCrop();
         }else {
            this.disableCrop();
         }
      },
      commitCrop: function(image) {
         this.disableCrop();
         var imageObj = getImgArgs($('#btnCommitCrop')),
         options = {};
         if (crop_api) {
            options.rect = {left: crop_api.x1, top: crop_api.y1, width:crop_api.w, height:crop_api.h};
            var newEl = pixastic(imageObj, options);
         }
         this.cropLive = false;     
      },
      toggleImageTool: function(func) {
         console.log(func);
         if (func != 'cropping') {
            this.disableCrop();
         } else {
            if ($('#btnCommitCrop').is(':visible')) {
               if (!this.cropLive) this.enableCrop();
            }
         }
      }
   }
});



//text editor
App.TinymceView = Ember.TextArea.extend({
   editor: null,
   _suspendValueChange: false,
   didInsertElement: function() {
      var id = '#' + this.get('elementId');
      var view = this;
      tinymce.init({
         selector: id,
         plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor colorpicker textpattern"
         ],
         toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
         toolbar2: " preview media | forecolor backcolor emoticons",
         image_advtab: true,
         setup: function(ed) {
            view.set("editor", ed);
            ed.on("keyup change", function() {
                  view.suspendValueChange(function() {
                     view.set("value", ed.getContent());
                  });
            });
         }
      });
   },
   suspendValueChange: function(cb) {
      this._suspendValueChange = true;
      cb();
      this._suspendValueChange = false;
   },
   valueChanged: function() {
      if (this._suspendValueChange) { return; }
      var content = this.get("value");
      this.get("editor").setContent("content");
   }.observes('value'),
   willClearRender: function() {
      this.get('editor').remove();
   }
});

App.Chosen = Ember.Select.extend({
  multiple: false,
  width: '95%',
  disableSearchThreshold: 10,
  searchContains: true,
  attributeBindings:['multiple', 'width', 'disableSearchThreshold', 'searchContains', 'data-function'],

  didInsertElement: function(){
    this._super();

    var options = {
      multiple: this.get('multiple'),
      width: this.get('width'),
      disable_search_threshold: this.get('disableSearchThreshold'),
      search_contains: this.get('searchContains'),
      dataFunction: this.get('data-function')
    };

    options.clean_search_text = this.cleanSearchText;
    options.calling_context = this;

    if(this.get('multiple')){
      options.placeholder_text_multiple = this.get('prompt');
    } else {
      options.placeholder_text_single = this.get('prompt');
    }

    this.$().chosen(options);

    // observes for new changes on options to trigger an update on Chosen
    return this.addObserver(this.get("optionLabelPath").replace(/^content/, "content.@each"), function() {
      return this.rerenderChosen();
    });

  },

  _closeChosen: function(){
    // trigger escape to close chosen
    this.$().next('.chosen-container-active').find('input').trigger({type:'keyup', which:27});
  },

  cleanSearchText: function(option, context){
    return option.text;
  },

  rerenderChosen: function(){
    // Don't trigger Chosen update until after DOM elements have finished rendering.
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$().trigger('chosen:updated');
    });
  }  
});



App.ImageLoaderComponent = Ember.Component.extend({
   src:'',
   height: '',
   width: '',
   attributeBindings:['width', 'height', 'src'],
   classNames: ['img_wrapper'],
   classNameBindings: ['loaded'],
   loaded: false,
   handleLoad: function() {
      var w = this.get('width'), h = this.get('height');
      this.$().css({"height":h+"px", "width": w+'px'});
      this.$().children('img').bind('load', function() {
         this.set('loaded', true);
      }.bind(this));
  }.on('didInsertElement')
});

App.DisqusView = Ember.View.extend({
   elementId: 'disqus_thread',
   tagName: 'div',
   classNames: ['disqusEl'],
   didInsertElement: function() {
      if(showDisqus === true){ 
         if (window.DISQUS) {
            var id = this.get('post.id'),
            title = this.get('post.title');
            DISQUS.reset({
               reload: true,
               config: function() {
                  this.page.identifier = id;
                  this.page.title = title;
                  this.page.url = window.location.toString();
               }
            });
         } else {
            window.disqus_shortname = 'jaredjkramer';
            window.disqus_identifier = this.get('post.id');
            window.disqus_url = window.location.toString();
            window.disqus_title = this.get('post.title');
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
         }
      }
   }
   
});


Ember.Handlebars.helper('headTitle', function(title) {
  $('head').find('title').text(title);
}, 'title');

Ember.Handlebars.helper('headDescription', function(description) {
  var escaped = Handlebars.Utils.escapeExpression(description);
  $('head').find('#metadescription').attr('content', escaped) 
}, 'description');

Ember.Handlebars.helper('headKeywords', function(keywords){
   var escaped = Handlebars.Utils.escapeExpression(keywords);
   $('head').find('#metakeywords').attr('content', escaped);
}, 'keywords');





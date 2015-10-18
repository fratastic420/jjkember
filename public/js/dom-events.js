//for various requests that I dont want bound to the ember crud
var RESTRequest = {
    req: function(searchTerms, urlString, timeOut){
        if (!timeOut) timeOut=1200000;
        var promise = $.Deferred();
        $.ajax(urlString, {
            type: 'POST',
            processData: false,
            data: JSON.stringify(searchTerms),
            contentType: "application/json",
            timeout: timeOut,
            success: function(result){
                promise.resolve(result);
            },
            error: function(){
                var error = "Ajax Error";
                promise.reject(error);
            }
        });
        return promise;
    }   
},
countdown = null,
LaravelRequest = {
	req: function(searchTerms, urlString, aType, timeOut){
		if (!timeOut) {
			timeOut = 1200000;
		}
		if (!aType) {
			aType = 'POST';
		}
		var promise = $.Deferred();
		$.ajax(urlString, {
			type: aType,
			processData: false,
			data: JSON.stringify(searchTerms),
			contentType: "application/json",
			timeout: timeOut,
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				if (data.status === 401) {
					console.log(data.responseJSON);
				}
				if (data.status === 422) {
					//this.success(data.responseJSON);
					//console.log(data.responseJSON)
				}
			}
		});
		return promise;
	}
};


function fitText(el) {
	var elem = el ? el : $('.fittext');
	elem.fitText(1.825);
	return true;
}

function lazyBind() {
	if ($('.lazy').length > 0) {
		$('.lazy').show().lazyload({threshold:400});
		$('.lazy').on('mouseover', function(){
			  $(this).attr('src', $(this).data('src'));
	   });
		return true;
	}else{
		return false;
	}
}

function dragBind() {
   if ($('.draggable').length > 0) {
		$('.draggable').each(function(){
		  el = $(this);
		  el.draggable({
			 axis: el.data('axis') ? el.data('axis') : "",
			 drag: function(event, ui) {
				if(el.data('constrain')){
				   height = el.height() - el.parent().height(), t = ui.position.top;
				   if (t > 0)  return false; else if (t < -1*height)  return false;
				}
				return true;
			 }
		  });
	   });
	return true;
   }
   else {
	return false;
   }
}

//this function kinda sucks balls -> not needed
function searchAndBind(el, func, funcparam){
    countdown = setInterval(function(){
      var result = func(funcparam);
	  if(result != false){
		clearInterval(countdown);
	  }
   }, 500);
   return countdown;
}

function setTitle(title) {
	$(document).attr('title', title);
	return true;
}

function siteNoty(s, t, p, time, m, th){
   if (!time) time = 4000;
   if (!m) m = false;
   if (!th) th="defaultTheme"; 
   return noty({text: s, layout: p, type: t, theme: th, timeout: time, modal: m});
}

function getCanvasData(id, type){
   var elem = document.getElementById(id), ctx = elem.getContext('2d');
   var w = $('#'+id).attr("width"), h = $('#'+id).attr("height");
   ctx.getImageData(0,0,parseFloat(w),parseFloat(h));
   if (type == 'jpg') type = 'jpeg';
   return elem.toDataURL('image/'+type || 'image/png');
}




function pixastic(image, options){
   if (!options) options = null;
   var el = image.el ?  image.el : $('#editedImage');
   if (!el.attr('src')) return alert('No Image');
   var src = image.src ? image.src : $('#main_image_path').val() ? $('#main_image_path').val() : el.attr('src');
   var type = image.type ? image.type.toLowerCase() : $('#main_image_type').val().toLowerCase();
   var fn = image.fn ? image.fn.toString() : "";
   var id = el.attr('id');
   if (fn == "") return false;
   try{
      el.pixastic(fn, options);
      var canvasData = getCanvasData(id, type);
      image.canvasData = canvasData;
      if ($('canvas#'+id).length > 0) {
         var par = el.parent();
         $('canvas#'+id).remove();
         $('#editImage').attr('src', canvasData).parent().parent().append('<img src="'+canvasData+'" id="'+id+'" />');
      }
      return image;   
   } catch( error ) {
      siteNoty("<strong>Error:</strong> "+error + "<br>Try running the process again?", "error", "center");
	  $('.mainImagestepReset').trigger('click');
      return false;
   }
  
}

function getImgArgs(elem) {
   return {el: $('#editedImage'), src: $('#main_image_path').val(), type: $('#main_image_type').val(), fn: elem.data('func')};
}

function resetImage(currentImage) {
   if (currentImage) {
     $('#editImage').attr('src', currentImage.imagepath ? currentImage.imagepath : $('#main_image_path').val());
     $('#editedImage').attr('src', currentImage.imagepath ? currentImage.imagepath : $('#main_image_path').val());
	 return true;
   }
   return false;
}


function resetSliders(el){
   var fields = el.parent().parent().attr('id');
   $('#'+fields+' .bslider').each(function() {
      $(this).slider('setValue', $(this).data('slider-value'), true);
   });
   return fields;
}

function getImgOptions(el) {
   var options = {};
   var fields = el.parent().parent().attr('id');
   $('#'+fields+' input').each(function() {
      var t = $(this);
      options[""+t.data('param')+""] = t.val() ? t.val() : 0; 
   });
   return options;
}


function imageProcess(el){
   var image = getImgArgs(el);
   var options = getImgOptions(el);
   if (!options) options = {};
   var newEl = pixastic(image, options);
   if (newEl) {
      if (options != null) resetSliders(el);
   }
   return image;
}


function cropDestroy() {
   $('.img-container img').cropper("disable");
   $('.commitCrop').addClass('disabled');
   return true;
}

function enableCropper() {
   $('.img-container img').cropper("enable");
   return true;
}

var crop_api = null;
function initCropper(params) {
   if (!params) params = null;
   var $image = $('.img-container img');
   var ratio, minW, minH, maxW, maxH, resize;
   if (params != null){
      var ratio = params.ratio ? params.ratio : "auto";
      var minW = parseInt(params.minW) ? parseInt(params.minW) : 0;
      var minH = parseInt(params.minH) ? parseInt(params.minH) : 0;
      var maxH = parseInt(params.maxH) ? parseInt(params.maxH) : "Infinity";
      var maxW = parseInt(params.maxW) ? parseInt(params.maxW) : "Infinity";
      var resize = params.resize ? params.resize : true;
   }
   $image.cropper({
      minWidth: minW,
      minHeight: minH,
      maxWidth: maxW,
      maxHeight: maxH,
      resizeable: resize,   
      aspectRatio : ratio,
      preview: ".img-preview",
      done: function(data){
         $r = data.width / data.height;
         if (crop_api) {
             if (crop_api.r != $r) {
               crop_api.r = $r
               previewAdj(crop_api);
             }          
         }
         crop_api = {x1: data.x1, x2: data.x2, y1: data.y1, y2: data.y2, h: data.height, w: data.width, r: $r};
         $('.commitCrop').removeClass('disabled');
      }
   });
   return true;
}

function previewAdj(crop_obj) {
   var curW = $('.img-preview').width(),
   curH = parseInt(curW / crop_obj.r);
   return $('.img-preview').css({"height": curH+"px"});
}

function galleryInfo(el){
   return el.bind('mouseover', function(){
      var w = $(this).width();
      console.log(w);
      $(this).find('.caption').css({"width":w+"px"}).removeClass('collapse').addClass("collapse-in");
   }).bind('mouseout', function() {
      console.log('out');
      $(this).find('.caption').removeClass('collapse-in').addClass('collapse');
   });
}

function objectInArr(arr, object, param, sVal) {
   var i = null;
   $.each(arr, function(index, value){
      if (value[''+param+""] == sVal) {
        i = index;
      }
   });
   return i;
}

function toolBarEvents() {
   
}

function updateChosen() {
    return $('.chosen').on('change', function(e) {
      var f = $(this).data('function');
      var v = $(this).val();
   });
}

function bindDOMEvents() {
   $('.bslider').slider();
   return true;
}

function imageFunction() {
   return $('.imageFunc').on('click', function(e){
      $('.killCrop').trigger('click');
      imageProcess($(this));
   });
}

function justTheTip () {
   return $('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});
}

function bindKonami() {
   return $(document).bind('keystrokes.SingleItem', {
		keys: ['arrow up','arrow up','arrow down','arrow down','arrow left','arrow right','arrow left','arrow right','b','a']
	}, function(event) {
		//$(this).unbind(event.keystrokes.stack_item.name);
		$(".konami").trigger("click").trigger("click");
   });
}

//no longer needed
function traverseGalleries(el){
   var instance;
   $(el).each(function(i){
     elemID = $(this).find('a.lightbox').first().data('lightbox');
     instance = lightBox('a.lightbox[data-lightbox="'+elemID+'"]');
   });
   return instance;
}

function lightBox(el) {
   var lBoxInstance = $(el).imageLightbox({
         onStart: function() {
            overlayOn();
            //arrowsOn(lBoxInstance,el);
         },
         onEnd: function() {
           //arrowsOff();
           activityIndicatorOff();overlayOff();
         },
         onLoadStart: function() {
            activityIndicatorOn();
         },
         onLoadEnd: function() {
            //$( '.imagelightbox-arrow' ).css( 'display', 'block' );
            activityIndicatorOff();
         }
   });
   return lBoxInstance;
}

function updateHeadlinePos(el) {

}

function bookmarkMe() {
	try {
		if(document.all) {
			window.external.AddFavorite(location.href,document.title);
		}
		else if(window.opera && window.print) {
			var elem = document.createElement('a');
			elem.setAttribute('href',window.location);
			elem.setAttribute('title',document.title);
			elem.setAttribute('rel','sidebar');
			elem.click();
		}
		else if(window.sidebar) {
			//add_bookmark(location.href, document.title);
			var bmsvc = Components.classes["@mozilla.org/browser/nav-bookmarks-service;1"].getService(Components.interfaces.nsINavBookmarksService);
			var ios = Components.classes["@mozilla.org/network/io-service;1"]
                    .getService(Components.interfaces.nsIIOService);
			var uri = ios.newURI(window.location, null, null);	
			var newBkmkId = bmsvc.insertBookmark(newFolderId, uri, bmsvc.DEFAULT_INDEX, document.title);
		}
		else {
			siteNoty("<strong>Warning:</strong> <br>Your browser may not support Javascript bookmarking. Please press ctrl + D (command + D Mac) to Bookmark this page. :)", "info", "center");
		}
	}
	catch(err) {
		siteNoty("<strong>Warning:</strong> <br>Your browser may not support Javascript bookmarking. Please press ctrl + D (command + D Mac) to Bookmark this page. :)", "info", "center");
	}	
	return false;
}



//DOM BINDING -> Which is useless in EMBER
$(function(){
	
   bindDOMEvents();

   $('#crudLinks a').on('click', function(e) {
      var id = $(this).parent().parent().attr('id');
      $('a[href="#'+id+'"]').trigger('click');
      $('.trayToggle i').trigger('click');
   });
   
	var token;
	token = $('meta[name="csrf-token"]').attr('content');
	return $.ajaxPrefilter(function(options, originalOptions, xhr) {
		return xhr.setRequestHeader('X-CSRF-Token', token);
	});
   
});
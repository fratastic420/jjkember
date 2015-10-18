Ember.TEMPLATES["addarticles/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseMainImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n									<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getEmberURL", "image", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\"><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"></a></div>\n								");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<li class=\"pull-left\">\n								<a class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAuxImage", "auximage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("auximage.thumbpath"),
    'data-original': ("auximage.thumbpath"),
    'data-id': ("auximage.id"),
    'data-large': ("auximage.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\">\n									<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n								</a>\n							</li>\n						");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n							<li class=\"alert alert-success\" role=\"alert\">No Images Selected, Which is fine, you don't have to :)</li>\n						");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAuxImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Go Back");
  }

  data.buffer.push("<h2 class=\"text-right\">Create A New Article</h2><hr>\n			<form class=\"form-horizontal\" role=\"form\">\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Title</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTitle"),
    'placeholder': ("Article Title"),
    'valueBinding': ("model.title")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleMainImage\" class=\"col-sm-2 control-label\">Main Image</label>\n					<div class=\"mainimageContainer col-sm-10\">\n						<div class=\"btn-group btn-group-justified cropMainImageTour\">\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-1 btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Choose Image <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-2 btn btn-default disabled\">Crop Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-3 btn btn-default disabled\">Commit Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImagestepReset btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetMainImg", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-refresh \"></i> Clear Main Image</button>\n							</div>\n						</div>\n						<div class=\"mainimageinputs hide\">\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImage"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimage")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImageId"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimageid")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n						</div>\n						<div class=\"editMainImageTools\">\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitCrop\" data-func=\"crop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-edit\"></i> Crop</button>							\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitImage\" id=\"btnCommitImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentMainImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-floppy-save\"></i> Commit Cropped Image</button>						\n						</div>\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<button class=\"btn btn-block toggleMainImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Select an Image</button>\n						<div class=\"mainimageTray collapse imageTray\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n						<label for=\"getImageSRC\" class=\"col-sm-2 control-label\">Embed Uploaded Image</label>\n						<div class=\"col-sm-10\">\n							<button class=\"btn btn-default btn-jjkramer btn-block toggleEmbed\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEmbedImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Image</button>\n							<div class=\"embedimageTray collapse imageTray\">\n								");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</div>\n						</div><!-- ADD modal for url-->\n				</div>\n				\n				<div class=\"form-group\">\n					<label for=\"txtArticleText\" class=\"col-sm-2 control-label\">Text</label>\n					<div class=\"textContainer col-sm-10\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TinymceView", {hash:{
    'class': ("form-control "),
    'id': ("txtArticleText"),
    'placeholder': ("This is the article body"),
    'valueBinding': ("model.text")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				</div>				\n				<div class=\"form-group\">\n					<label for=\"txtArticleTags\" class=\"col-sm-2 control-label\">Tags</label>\n					<div class=\"tagsContainer col-sm-10\">\n						<div class=\"input-group col-sm-7 pull-left chooseTags\">\n							<span class=\"input-group-btn\">\n								<button class=\"btn btn-default btn-success\"><i class=\"glyphicon glyphicon-tags\"></i> Choose Tags</button>\n							</span>\n							");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Chosen", {hash:{
    'contentBinding': ("keywords"),
    'optionLabelPath': ("content.name"),
    'selectionBinding': ("controller.curTags"),
    'multiple': ("multiple"),
    'data-function': ("updateTags"),
    'class': ("form-control chosen")
  },hashTypes:{'contentBinding': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'multiple': "STRING",'data-function': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'multiple': depth0,'data-function': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n						</div>\n						<div class=\"input-group col-sm-4 pull-right\">\n							<input type=\"text\" id=\"txtAddTag\" class=\"form-control\">\n							<span class=\"input-group-btn\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTag", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-primary\" type=\"button\"><i class=\"glyphicon glyphicon-tag\"></i> Add Tag</button>\n							</span>\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuxImages\" class=\"col-sm-2 control-label\">More Images?</label>\n					<div class=\"auxImagesContainer col-sm-10\">\n						<ul class=\"media-grid unstyled\">\n						");
  stack1 = helpers.each.call(depth0, "auximage", "in", "model.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n						<br>\n						<button class=\"btn btn-block toggleAuxImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAuxImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Images</button>\n						<div class=\"auximageTray imageTray collapse\">\n							<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button>--><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuthor\" class=\"col-sm-2 control-label\">Author</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("txtArticleAuthor"),
    'class': ("form-control"),
    'valueBinding': ("model.author")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"col-sm-2 control-label\"></div>\n					<div class=\"col-sm-10\">\n						<div class=\"btn-group btn-group-justified articleFunctions\">\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previewArticle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-globe\"></i> Preview </button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-ban-circle\"></i> Reset </button>\n							</div>\n							<div class=\"btn-group\">\n								<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-floppy-saved\"></i> Save </button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n			</form>\n			\n			\n			<div class=\"col-sm-12 modelPreview articlePreview collapse\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['article-details'] || (depth0 && depth0['article-details']),options={hash:{
    'article': ("model")
  },hashTypes:{'article': "ID"},hashContexts:{'article': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "article-details", options))));
  data.buffer.push("\n			</div>\n			<br>\n			<div class=\"clearfix\"></div>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n			<div class=\"modal fade emdedURLModal\">\n				<div class=\"modal-header\">\n						<button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n				</div>\n				<div class=\"modal-body\">\n					");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("currentEmbedURL"),
    'class': ("input-large col-sm-12"),
    'valueBinding': ("view.currentEmbedURL")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</div>\n				<div class=\"modal-footer\">\n						<a href=\"#\" class=\"btn btn-block\" data-dismiss=\"modal\">Cancel</a>\n				</div>\n			</div>");
  return buffer;
  
});

Ember.TEMPLATES["addartworks/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseMainImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<li class=\"pull-left\">\n								<a class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAuxImage", "auximage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("auximage.thumbpath"),
    'data-original': ("auximage.thumbpath"),
    'data-id': ("auximage.id"),
    'data-large': ("auximage.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\">\n									<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n								</a>\n							</li>\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n							<li class=\"alert alert-success\" role=\"alert\">No Images Selected, Which is fine, you don't have to :)</li>\n						");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAuxImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Go Back");
  }

  data.buffer.push("	<h2 class=\"text-right\">Create A New Artwork</h2><hr>\n			<form class=\"form-horizontal\" role=\"form\">\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Title</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTitle"),
    'placeholder': ("Artwork Title"),
    'valueBinding': ("model.title")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleMainImage\" class=\"col-sm-2 control-label\">Main Image</label>\n					<div class=\"mainimageContainer col-sm-10\">\n						<div class=\"btn-group btn-group-justified cropMainImageTour\">\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-1 btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Choose Image <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-2 btn btn-default disabled\">Crop Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-3 btn btn-default disabled\">Commit Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImagestepReset btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetMainImg", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-refresh \"></i> Clear Main Image</button>\n							</div>\n						</div>\n						<div class=\"mainimageinputs hide\">\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImage"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimage")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImageId"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimageid")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n						</div>\n						<div class=\"editMainImageTools\">\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitCrop\" data-func=\"crop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-edit\"></i> Crop</button>							\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitImage\" id=\"btnCommitImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentMainImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-floppy-save\"></i> Commit Cropped Image</button>						\n						</div>\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<button class=\"btn btn-block toggleMainImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Select an Image</button>\n						<div class=\"mainimageTray collapse imageTray\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleText\" class=\"col-sm-2 control-label\">Text</label>\n					<div class=\"textContainer col-sm-10\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TinymceView", {hash:{
    'class': ("form-control "),
    'id': ("txtArticleText"),
    'placeholder': ("This is the article body"),
    'valueBinding': ("model.text")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				</div>				\n				<div class=\"form-group\">\n					<label for=\"txtArticleTags\" class=\"col-sm-2 control-label\">Tags</label>\n					<div class=\"tagsContainer col-sm-10\">\n						<div class=\"input-group col-sm-7 pull-left chooseTags\">\n							<span class=\"input-group-btn\">\n								<button class=\"btn btn-default btn-success\"><i class=\"glyphicon glyphicon-tags\"></i> Choose Tags</button>\n							</span>\n							");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Chosen", {hash:{
    'contentBinding': ("keywords"),
    'optionLabelPath': ("content.name"),
    'selectionBinding': ("controller.curTags"),
    'multiple': ("multiple"),
    'data-function': ("updateTags"),
    'class': ("form-control chosen")
  },hashTypes:{'contentBinding': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'multiple': "STRING",'data-function': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'multiple': depth0,'data-function': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n						</div>\n						<div class=\"input-group col-sm-4 pull-right\">\n							<input type=\"text\" id=\"txtAddTag\" class=\"form-control\">\n							<span class=\"input-group-btn\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTag", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-primary\" type=\"button\"><i class=\"glyphicon glyphicon-tag\"></i> Add Tag</button>\n							</span>\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuxImages\" class=\"col-sm-2 control-label\">More Images?</label>\n					<div class=\"auxImagesContainer col-sm-10\">\n						<ul class=\"media-grid unstyled\">\n						");
  stack1 = helpers.each.call(depth0, "auximage", "in", "model.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n						<br>\n						<button class=\"btn btn-block toggleAuxImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAuxImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Images</button>\n						<div class=\"auximageTray imageTray collapse\">\n							<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button>--><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuthor\" class=\"col-sm-2 control-label\">Author</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("txtArticleAuthor"),
    'class': ("form-control"),
    'valueBinding': ("model.author")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"col-sm-2 control-label\"></div>\n					<div class=\"col-sm-10\">\n						<div class=\"btn-group btn-group-justified articleFunctions\">\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previewArticle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-globe\"></i> Preview </button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-ban-circle\"></i> Reset </button>\n							</div>\n							<div class=\"btn-group\">\n								<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-floppy-saved\"></i> Save </button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n			</form>\n			\n			\n			<div class=\"col-sm-12 modelPreview artworkPreview collapse\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['artwork-details'] || (depth0 && depth0['artwork-details']),options={hash:{
    'artwork': ("model")
  },hashTypes:{'artwork': "ID"},hashContexts:{'artwork': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "artwork-details", options))));
  data.buffer.push("\n			</div>\n			<br>\n			<div class=\"clearfix\"></div>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n			");
  return buffer;
  
});

Ember.TEMPLATES["addsites/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseMainImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<li class=\"pull-left\">\n								<a class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAuxImage", "auximage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("auximage.thumbpath"),
    'data-original': ("auximage.thumbpath"),
    'data-id': ("auximage.id"),
    'data-large': ("auximage.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\">\n									<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n								</a>\n							</li>\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n							<li class=\"alert alert-success\" role=\"alert\">No Images Selected, Which is fine, you don't have to :)</li>\n						");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAuxImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Go Back");
  }

  data.buffer.push("<h2 class=\"text-right\">Create A New Site / Code Post</h2><hr>\n			<form class=\"form-horizontal\" role=\"form\">\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Title</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTitle"),
    'placeholder': ("Article Title"),
    'valueBinding': ("model.title")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">URL</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleUrl"),
    'placeholder': ("http://jaredjkramer.com"),
    'valueBinding': ("model.url")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Tech</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTech"),
    'placeholder': ("Ember.js, PHP"),
    'valueBinding': ("model.tech")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleMainImage\" class=\"col-sm-2 control-label\">Main Image</label>\n					<div class=\"mainimageContainer col-sm-10\">\n						<div class=\"btn-group btn-group-justified cropMainImageTour\">\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-1 btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Choose Image <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-2 btn btn-default disabled\">Crop Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-3 btn btn-default disabled\">Commit Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImagestepReset btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetMainImg", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-refresh \"></i> Clear Main Image</button>\n							</div>\n						</div>\n						<div class=\"mainimageinputs hide\">\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImage"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimage")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImageId"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimageid")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n						</div>\n						<div class=\"editMainImageTools\">\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitCrop\" data-func=\"crop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-edit\"></i> Crop</button>							\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitImage\" id=\"btnCommitImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentMainImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-floppy-save\"></i> Commit Cropped Image</button>						\n						</div>\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<button class=\"btn btn-block toggleMainImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Select an Image</button>\n						<div class=\"mainimageTray collapse imageTray\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleText\" class=\"col-sm-2 control-label\">Text</label>\n					<div class=\"textContainer col-sm-10\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TinymceView", {hash:{
    'class': ("form-control "),
    'id': ("txtArticleText"),
    'placeholder': ("This is the article body"),
    'valueBinding': ("model.text")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				</div>				\n				<div class=\"form-group\">\n					<label for=\"txtArticleTags\" class=\"col-sm-2 control-label\">Tags</label>\n					<div class=\"tagsContainer col-sm-10\">\n						<div class=\"input-group col-sm-7 pull-left chooseTags\">\n							<span class=\"input-group-btn\">\n								<button class=\"btn btn-default btn-success\"><i class=\"glyphicon glyphicon-tags\"></i> Choose Tags</button>\n							</span>\n							");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Chosen", {hash:{
    'contentBinding': ("keywords"),
    'optionLabelPath': ("content.name"),
    'selectionBinding': ("controller.curTags"),
    'multiple': ("multiple"),
    'data-function': ("updateTags"),
    'class': ("form-control chosen")
  },hashTypes:{'contentBinding': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'multiple': "STRING",'data-function': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'multiple': depth0,'data-function': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n						</div>\n						<div class=\"input-group col-sm-4 pull-right\">\n							<input type=\"text\" id=\"txtAddTag\" class=\"form-control\">\n							<span class=\"input-group-btn\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTag", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-primary\" type=\"button\"><i class=\"glyphicon glyphicon-tag\"></i> Add Tag</button>\n							</span>\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuxImages\" class=\"col-sm-2 control-label\">More Images?</label>\n					<div class=\"auxImagesContainer col-sm-10\">\n						<ul class=\"media-grid unstyled\">\n						");
  stack1 = helpers.each.call(depth0, "auximage", "in", "model.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n						<br>\n						<button class=\"btn btn-block toggleAuxImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAuxImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Images</button>\n						<div class=\"auximageTray imageTray collapse\">\n							<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button>--><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuthor\" class=\"col-sm-2 control-label\">Author</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("txtArticleAuthor"),
    'class': ("form-control"),
    'valueBinding': ("model.author")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"col-sm-2 control-label\"></div>\n					<div class=\"col-sm-10\">\n						<div class=\"btn-group btn-group-justified articleFunctions\">\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previewArticle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-globe\"></i> Preview </button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-ban-circle\"></i> Reset </button>\n							</div>\n							<div class=\"btn-group\">\n								<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-floppy-saved\"></i> Save </button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n			</form>\n			\n			\n			<div class=\"col-sm-12 modelPreview articlePreview collapse\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['article-details'] || (depth0 && depth0['article-details']),options={hash:{
    'article': ("model")
  },hashTypes:{'article': "ID"},hashContexts:{'article': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "article-details", options))));
  data.buffer.push("\n			</div>\n			<br>\n			<div class=\"clearfix\"></div>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				<div id=\"loginForm\" class=\"loginForm modal fade\">\n					<div class=\"modal-header\">\n						<button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n						<h3 class=\"text-center\">Sign In</h3>\n					</div>\n					<div class=\"modal-body\">\n						<form class=\"form-horizontal\" role=\"form\">\n								<div class=\"form-group\">\n									<label for=\"txtusername\" class=\"col-sm-2 control-label\">Email</label>\n									<div class=\"col-sm-10\">\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'value': ("email"),
    'type': ("text")
  },hashTypes:{'class': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'class': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									</div>\n								</div>\n								<div class=\"form-group\">\n									<label for=\"txtpassword\" class=\"col-sm-2 control-label\">Password</label>\n									<div class=\"col-sm-10\">\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'value': ("password"),
    'type': ("password")
  },hashTypes:{'class': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'class': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									</div>\n								</div>\n								<div class=\"form-group\">\n									<label for=\"remember\" class=\"col-sm-2 control-label\"></label>\n									<div class=\"col-sm-10\">\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("remember"),
    'value': (1),
    'checked': (true)
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "INTEGER",'checked': "BOOLEAN"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" Remember me?\n									</div>\n								</div>						\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("type=\"submit\" class=\"btn btn-block btn-large btn-primary\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isProcessing")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Sign in</button>\n						</form>\n					</div>\n					<div class=\"modal-footer\">\n						<a href=\"#\" class=\"btn btn-block\" data-dismiss=\"modal\">Cancel</a>\n						");
  stack1 = helpers['if'].call(depth0, "loginFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = helpers['if'].call(depth0, "isProcessing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = helpers['if'].call(depth0, "isSlowConnection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div>\n				</div>\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n							<div class=\"alert alert-grey text-center loginFailed\">Invalid email and / or password.</div>\n						");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n							<div class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></i> Processing...</div>\n						");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n							<div class=\"alert alert-info\">This is taking longer than expected, one moment please.</div>\n						");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicons white book_open\"></i> <span class=\"stratum moveupabit\">Home</span> ");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicons white brush\"></i> <span class=\"stratum moveupabit\">The Studio</span>");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicons white embed_close\"></i> <span class=\"stratum moveupabit\">The Nerdery</span>");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("<img src=\"img/jjklogo100x100.png\"/>");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				<div class=\"mainImgContainer\">\n					<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("pageImage"),
    'alt': ("pageTitle")
  },hashTypes:{'src': "STRING",'alt': "STRING"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-responsive superImage\"/>\n					<h1 id=\"headline\" class=\"fittext\">");
  stack1 = helpers._triageMustache.call(depth0, "pageTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n				</div>\n			");
  return buffer;
  }

function program18(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"mainImgContainer empty hidden-xs \"></div>\n			");
  }

function program20(depth0,data) {
  
  var buffer = '';
  data.buffer.push(" <!-- may need to change to hasAbout -->\n					<div class=\"col-sm-3  aboutSection\">\n						<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("jaredAvatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-circle img-responsive img-author tooltipme\" data-rel=\"tooltip\" title=\"Totally Handsome, Amirite?\">\n						<div class=\"author-title\"><h1>About Jared</h1></div>\n						<div class=\"author-info ext-justify\">\n							Jared Kramer is a Web Applications Developer from the United States. Jared specializes in MVC oriented JS platforms while using a variety of backend languages to develop fully integrated RESTful applications.\n							<hr>\n							When not coding until his fingers are worn out little nubbies and ripping apart source code,\n							Jared spends a considerable amount of his precious free time drawing and illustrating in hopes of publishing his works for the world to enjoy at their leisure.\n							Jared also enjoys watching and attending sporting events, weight training, and cooking. Jared currently resides in Northeastern Pennsylvania.\n						</div>\n						<hr>\n						<div class=\"clearfix\"></div>\n						<h4 class=\"text-right\">Soooo Social! Find me!</h4>\n						<ul class=\"sm-icons unstyled\">\n							<li class=\"pull-right\"><a href=\"https://twitter.com/jjkramer_tech\" target=\"_blank\"><i class=\"icon-round icon-twitter tooltipme\"  data-rel=\"tooltip\" title=\"Find me on Twitter\"></a></i></li>\n							<li class=\"pull-right\"><a href=\"http://fratastic420.deviantart.com\" target=\"_blank\"><i class=\"icon-round icon-deviantart tooltipme\"  data-rel=\"tooltip\" title=\"Find me on DeviantArt\"></a></i></li>\n							<li class=\"pull-right\"><a href=\"http://www.pinterest.com/jaredjkramer/\" target=\"_blank\"><i class=\"icon-round icon-pinterest tooltipme\" data-rel=\"tooltip\" target=\"_blank\" title=\"Find me on Pinterest\"></i></a></li>\n							<li class=\"pull-right\"><a href=\"http://instagram.com/jaredjkramer\" target=\"_blank\"><i class=\"icon-round icon-instagram tooltipme\" data-rel=\"tooltip\" target=\"_blank\" title=\"Find me on Instagram\"></i></a></li>\n							<li class=\"pull-right\"><a href=\"https://github.com/fratastic420\" target=\"_blank\"><i class=\"icon-round icon-github tooltipme\" data-rel=\"tooltip\" title=\"Find me on Github\"></i></a></li>\n							<li class=\"pull-right\"><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("mailJared")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><i class=\"icon-round icon-message tooltipme\" data-rel=\"tooltip\" title=\"Send me a message\"></i></a></li>\n						</ul>\n						<div class=\"clearfix\"></div>\n					</div>\n				");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" \n				<footer class=\"footer\">\n					\n					<div class=\"pull-left onethirdrel\">\n					<ul class=\"nav nav-pills nav-footer\">\n						<li>\n						<div class=\"input-group input-group-sm well-sm\">\n						<div class=\"input-group-btn\">\n						<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "bookmarkThis", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("class=\"btn btn-default\"><i class=\"glyphicons bookmark\"></i> Save for Later!  </button>						\n						</div>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtSearchSite"),
    'placeholder': ("Search Site"),
    'valueBinding': ("searchParam"),
    'action': ("search")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'action': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						<div class=\"input-group-btn\">\n						<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", "searchParam", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("requiredLength")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-inverse\" type=\"button\"><i class=\"glyphicons search white\"></i></button>\n						</div>\n						</div>\n						</li>\n					</ul>\n					</div>\n					\n					<div class=\"emberCredit pull-right text-right\">\n						<a href=\"http://emberjs.com\" target=\"_blank\"><img src=\"img/EmberJS_sm.png\"/></a>\n					</div>\n					<div class=\"pull-right copyright\">&copy; ");
  stack1 = helpers._triageMustache.call(depth0, "thisYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" JaredJKramer.com </div>\n				</footer>\n				");
  return buffer;
  }

  data.buffer.push("<button class=\"konami hide\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "triggerKonami", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">This should be hidden.</button>\n			");
  stack1 = helpers['if'].call(depth0, "konamiCode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			<header role=\"masthead\" class=\"visible-xs-block\">\n						<ul class=\"btn-group btn-group-justified\">\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary btn-inverse"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary btn-inverse"),
    'tag': ("li")
  },hashTypes:{'classNames': "STRING",'tag': "STRING"},hashContexts:{'classNames': depth0,'tag': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "artworks", options) : helperMissing.call(depth0, "link-to", "artworks", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary btn-inverse"),
    'tag': ("li")
  },hashTypes:{'classNames': "STRING",'tag': "STRING"},hashContexts:{'classNames': depth0,'tag': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sites", options) : helperMissing.call(depth0, "link-to", "sites", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n			</header>\n			<header role=\"masthead\" class=\"hidden-xs\">\n				<div id=\"branding\" class=\"branding\">\n					");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</div>\n				<nav class=\"headerLinks\">\n					<ul class=\"btn-group\">\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary btn-inverse"),
    'tag': ("li")
  },hashTypes:{'classNames': "STRING",'tag': "STRING"},hashContexts:{'classNames': depth0,'tag': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "artworks", options) : helperMissing.call(depth0, "link-to", "artworks", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary btn-inverse"),
    'tag': ("li")
  },hashTypes:{'classNames': "STRING",'tag': "STRING"},hashContexts:{'classNames': depth0,'tag': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sites", options) : helperMissing.call(depth0, "link-to", "sites", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("			\n					</ul>\n				</nav>\n			</header>\n			");
  stack1 = helpers['if'].call(depth0, "pageImage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n				<div id=\"container\" class=\"container-fluid\" >\n				");
  stack1 = helpers['if'].call(depth0, "hasAbout", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<div class=\"outlet\">");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n					");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "toolbar", "images", options) : helperMissing.call(depth0, "render", "toolbar", "images", options))));
  data.buffer.push("\n				</div>\n				");
  stack1 = helpers['if'].call(depth0, "hasFooter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	");
  return buffer;
  
});

Ember.TEMPLATES["article"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Articles");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("span"),
    'classNames': ("label label-info label-inverse")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "taggedarticles", "tag.name", options) : helperMissing.call(depth0, "link-to", "taggedarticles", "tag.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\n		");
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n			<span class=\"label label-default\">No Tags</span>\n		");
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"pull-left\">\n				<a class=\"thumbnail lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("aux.imagepath"),
    'data-lightbox': ("id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['image-loader'] || (depth0 && depth0['image-loader']),options={hash:{
    'src': ("aux.thumbpath"),
    'width': ("80"),
    'height': ("80")
  },hashTypes:{'src': "ID",'width': "STRING",'height': "STRING"},hashContexts:{'src': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-loader", options))));
  data.buffer.push("\n                    <!--<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("aux.thumbpath"),
    'data-id': ("aux.id"),
    'data-original': ("aux.thumbpath"),
    'data-large': ("aux.imagepath")
  },hashTypes:{'data-src': "STRING",'data-id': "STRING",'data-original': "STRING",'data-large': "STRING"},hashContexts:{'data-src': depth0,'data-id': depth0,'data-original': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        src=\"http://placehold.it/80x80&text=Loading...\" class=\"lazy img-responsive\" width=\"80\" height=\"80\"/>-->\n				</a>\n            </div>\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"well\">No additional Images</div>\n        ");
  }

  data.buffer.push("<ol class=\"breadcrumb\">\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles", options) : helperMissing.call(depth0, "link-to", "articles", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ol>\n<div class=\"row articledetails col-sm-9 pull-right\">\n	\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <div class=\"articlecredits\">\n        <em>By <strong>");
  stack1 = helpers._triageMustache.call(depth0, "author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> ");
  stack1 = helpers._triageMustache.call(depth0, "diffForHumans", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em><br>\n    </div>\n    <div class=\"articlekeywords\">\n		");
  stack1 = helpers.each.call(depth0, "tag", "in", "tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n    <div class=\"articlemainimage\">\n        <a class=\"lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("mainimageid.imagepath"),
    'data-lightbox': ("id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("mainimage"),
    'data-src': ("mainimage"),
    'data-original': ("mainimage")
  },hashTypes:{'src': "STRING",'data-src': "STRING",'data-original': "STRING"},hashContexts:{'src': depth0,'data-src': depth0,'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  class=\" img-responsive\" width=\"947\" height=\"287\"/>\n		</a>\n    </div><br>\n    <div class=\"articletext\">\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <hr>\n    <div class=\"articleauximages\">\n        <strong>MOAR IMAGES!</strong><br>\n        ");
  stack1 = helpers.each.call(depth0, "aux", "in", "auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"clearfix\"></div>\n		");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DisqusView", {hash:{
    'postBinding': ("controller.content")
  },hashTypes:{'postBinding': "STRING"},hashContexts:{'postBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  data.buffer.push(escapeExpression((helper = helpers.headTitle || (depth0 && depth0.headTitle),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "title", options) : helperMissing.call(depth0, "headTitle", "title", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.headDescription || (depth0 && depth0.headDescription),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "text", options) : helperMissing.call(depth0, "headDescription", "text", options))));
  return buffer;
  
});

Ember.TEMPLATES["articles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<!-- updated content -->\n				");
  stack1 = helpers['if'].call(depth0, "isFullAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				 <article class=\"article col-sm-12 wobble-vertical\">\n					");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("h2"),
    'classNames': ("fittext")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "article", "article.id", "article.slug", options) : helperMissing.call(depth0, "link-to", "article", "article.id", "article.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n					<div class=\"articlekeywords\">\n						");
  stack1 = helpers.each.call(depth0, "tag", "in", "article.tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div>\n					<!--<p class=\"mited\"><em>By ");
  stack1 = helpers._triageMustache.call(depth0, "article.author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" on ");
  stack1 = helpers._triageMustache.call(depth0, "article.timestamp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em></p>-->\n					<a class=\"lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("article.mainimageid.imagepath"),
    'data-lightbox': ("article.id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n								<!--src=\"http://placehold.it/947x287&text=Loading...\"--><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("article.mainimage"),
    'src': ("article.mainimage"),
    'data-original': ("article.mainimage")
  },hashTypes:{'data-src': "STRING",'src': "STRING",'data-original': "STRING"},hashContexts:{'data-src': depth0,'src': depth0,'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  class=\"img img-responsive\" width=\"947\" height=\"287\"/>\n					</a><br>\n					<div class=\"articletext shortened\">\n						");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div><br>\n					");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("h4"),
    'classNames': ("articleLink text-muted")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "article", "article.id", "article.slug", options) : helperMissing.call(depth0, "link-to", "article", "article.id", "article.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n					<div class=\"articleauximages\">\n						");
  stack1 = helpers.each.call(depth0, "aux", "in", "article.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						<!--<div class=\"clearfix\"></div>--><hr>\n					</div>\n					<div class=\"clearfix\"></div>\n					\n				</article>\n				 \n			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					<div class=\"articleActions\">\n						<div class=\"btn-group pull-right\">\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-primary")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "editarticle", "article.id", options) : helperMissing.call(depth0, "link-to", "editarticle", "article.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							<button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "article", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-trash\"></i></button>\n						</div>\n					</div>\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-edit\"></i>");
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "article.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("span"),
    'classNames': ("label label-info label-jjkramer")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "taggedarticles", "tag.name", options) : helperMissing.call(depth0, "link-to", "taggedarticles", "tag.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\n						");
  return buffer;
  }
function program8(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n							<span class=\"label label-default\">No Tags</span>\n						");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Read More");
  }

function program14(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<!--<div class=\"pull-left\">\n								<a class=\"thumbnail lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("aux.imagepath"),
    'data-lightbox': ("article.id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("aux.thumbpath"),
    'data-id': ("aux.id"),
    'data-original': ("aux.thumbpath"),
    'data-large': ("aux.imagepath")
  },hashTypes:{'data-src': "STRING",'data-id': "STRING",'data-original': "STRING",'data-large': "STRING"},hashContexts:{'data-src': depth0,'data-id': depth0,'data-original': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n										 src=\"http://placehold.it/80x80&text=Loading...\" class=\"lazy img-responsive\" width=\"80\" height=\"80\"/>\n								</a>\n							</div>-->\n						");
  return buffer;
  }

function program16(depth0,data) {
  
  
  data.buffer.push("\n							<!--No images<br>-->\n						");
  }

function program18(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No articles.</div>\n			");
  }

function program20(depth0,data) {
  
  
  data.buffer.push("\n<div class=\"alert alert-info alert-grey loading text-center has-spinner active articletext\"><i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></i> Loading More...</div>\n");
  }

  data.buffer.push("<section class=\"col-sm-9 loadmore-container\">				\n\n\n");
  stack1 = helpers.each.call(depth0, "article", "in", "updatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"clearfix\"></div>\n");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<button class=\"btn btn-default btn-inverse btn-block loadMore\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasMore")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicons white roundabout\"></i> Load More</button>\n</section>\n");
  data.buffer.push(escapeExpression((helper = helpers.headTitle || (depth0 && depth0.headTitle),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "JaredJKramer.com - I got Stories to Tell", options) : helperMissing.call(depth0, "headTitle", "JaredJKramer.com - I got Stories to Tell", options))));
  return buffer;
  
});

Ember.TEMPLATES["articlesearch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["artsearch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'classNames': ("")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artthumb", "artwork", options) : helperMissing.call(depth0, "render", "artthumb", "artwork", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		No art available.\n");
  }

  stack1 = helpers.each.call(depth0, "artwork", "in", "updatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"clearfix\"></div>\n<button class=\"btn btn-default btn-block minNinetyFive\"   ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasMore")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-repeat\"></i> Load More</button>");
  return buffer;
  
});

Ember.TEMPLATES["artthumb"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"artworkActions\">\n<div class=\"btn-group pull-right\">								\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-primary")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "editartwork", "id", options) : helperMissing.call(depth0, "link-to", "editartwork", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-trash\"></i></button>\n</div>\n</div>\n<!--<div class=\"artworkSocial\">\n<div class=\"btn-group pull-right\">\n<button class=\"btn btn-primary\"><i class=\"social-icon twitter white\"></i></button>\n<button class=\"btn btn-danger\"><i class=\"social-icon pinterest white\"></i></button>\n<button class=\"btn btn-jjkramer\"><i class=\"social-icon deviantart white\"></i></button>\n</div>\n</div>-->\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-edit\"></i>");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("mainimage"),
    'src': ("mainimage"),
    'data-original': ("mainimage")
  },hashTypes:{'data-src': "STRING",'src': "STRING",'data-original': "STRING"},hashContexts:{'data-src': depth0,'src': depth0,'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\" class=\" img-responsive galleryArt\" width=\"100%\">\n<div class=\"caption collapse\"><!-- src=\"http://placehold.it/300x300 -->\n<h3>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n<div class=\"viewMoar\">Click to view more.</div>\n<div class=\"content\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"artwork-thumbnail thumbnail wobble-vertical\">\n");
  stack1 = helpers['if'].call(depth0, "isFullAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "artwork", "id", "slug", options) : helperMissing.call(depth0, "link-to", "artwork", "id", "slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["artwork"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row artworkdetails \">\n	");
  data.buffer.push(escapeExpression((helper = helpers['artwork-details'] || (depth0 && depth0['artwork-details']),options={hash:{
    'artwork': ("model")
  },hashTypes:{'artwork': "ID"},hashContexts:{'artwork': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "artwork-details", options))));
  data.buffer.push("\n</div>	");
  return buffer;
  
});

Ember.TEMPLATES["artworks"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<!-- updatedContent-->\n					");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artthumb", "artwork", options) : helperMissing.call(depth0, "render", "artthumb", "artwork", options))));
  data.buffer.push("\n				");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No art available.</div>\n				");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n								<div class=\"alert alert-info alert-grey loading text-center has-spinner active articletext\"><i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></i> Loading More...</div>\n								");
  }

  stack1 = helpers.each.call(depth0, "artwork", "in", "updatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				<div class=\"clearfix\"></div>\n								");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			   <button class=\"btn btn-default btn-inverse btn-block  span12 minNinetyFive\"   ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasMore")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicons loadMore white roundabout\"></i> Load More</button>\n");
  data.buffer.push(escapeExpression((helper = helpers.headTitle || (depth0 && depth0.headTitle),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "JaredJKramer.com - I Illustrate things", options) : helperMissing.call(depth0, "headTitle", "JaredJKramer.com - I Illustrate things", options))));
  return buffer;
  
});

Ember.TEMPLATES["components/article-details"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						<span class=\"label label-success\">");
  stack1 = helpers._triageMustache.call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n						<span class=\"label\">No Tags</span>\n");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n						<div class=\"pull-left\"><a class=\"thumbnail\"><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("aux.thumbpath")
  },hashTypes:{'data-src': "STRING"},hashContexts:{'data-src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" src=\"http://placehold.it/80x80\" width=\"80\" height=\"80\" class=\"unveil img-responsive\" alt=\"An Image should be here.\"></a></div>\n");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n						<span class=\"label\">No aux images chosen</span>\n");
  }

  data.buffer.push("<h2>");
  stack1 = helpers._triageMustache.call(depth0, "article.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n<p class=\"muted\">By ");
  stack1 = helpers._triageMustache.call(depth0, "article.author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" on ");
  stack1 = helpers._triageMustache.call(depth0, "article.timestamp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("article.mainimage")
  },hashTypes:{'data-src': "STRING"},hashContexts:{'data-src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"unveil img-responsive\" width=\"947\" height=\"287\" src=\"http://placehold.it/947x287\"/><br>\n");
  stack1 = helpers._triageMustache.call(depth0, "article.mainimageid.imagepath", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<p>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n");
  stack1 = helpers.each.call(depth0, "tag", "in", "article.tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n");
  stack1 = helpers.each.call(depth0, "aux", "in", "article.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"clearfix\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["components/artwork-details"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("								\n								<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("artwork.mainimageid.imagepath"),
    'alt': ("artwork.title")
  },hashTypes:{'src': "STRING",'alt': "STRING"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-responsive draggable\" data-axis=\"y\" data-constrain=\"true\" width=\"100%\"/>\n								");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("The Studio");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n						<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "expandDesc", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">View Moar</a>\n					");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n						<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "expandDesc", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">View Less</a>\n					");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						");
  stack1 = helpers['if'].call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "taggedartworks", "tag.name", options) : helperMissing.call(depth0, "link-to", "taggedartworks", "tag.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<span class=\"label label-jjkramer\">");
  stack1 = helpers._triageMustache.call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n								<a class=\"thumbnail lightbox\" data-lightbox=\"gallery\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("artwork.mainimageid.imagepath")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n									");
  data.buffer.push(escapeExpression((helper = helpers['image-loader'] || (depth0 && depth0['image-loader']),options={hash:{
    'src': ("artwork.mainimageid.thumbpath"),
    'width': ("80"),
    'height': ("80")
  },hashTypes:{'src': "ID",'width': "STRING",'height': "STRING"},hashContexts:{'src': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-loader", options))));
  data.buffer.push("\n									<!--<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("artwork.mainimageid.thumbpath"),
    'data-id': ("artwork.id"),
    'data-original': ("artwork.mainimageid.thumbpath"),
    'data-large': ("artwork.mainimageid.imagepath")
  },hashTypes:{'data-src': "STRING",'data-id': "STRING",'data-original': "STRING",'data-large': "STRING"},hashContexts:{'data-src': depth0,'data-id': depth0,'data-original': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" \n										 src=\"http://placehold.it/80x80&text=Loading...\" class=\"lazy img-responsive\" width=\"80\" height=\"80\"/>-->\n								</a>\n								");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							<div class=\"pull-left\">\n								<a class=\"thumbnail lightbox\" data-lightbox=\"gallery\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("aux.imagepath")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n									");
  data.buffer.push(escapeExpression((helper = helpers['image-loader'] || (depth0 && depth0['image-loader']),options={hash:{
    'src': ("aux.thumbpath"),
    'width': ("80"),
    'height': ("80")
  },hashTypes:{'src': "ID",'width': "STRING",'height': "STRING"},hashContexts:{'src': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-loader", options))));
  data.buffer.push("\n									<!--<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("aux.thumbpath"),
    'data-id': ("artwork.id"),
    'data-original': ("aux.thumbpath"),
    'data-large': ("aux.imagepath")
  },hashTypes:{'data-src': "STRING",'data-id': "STRING",'data-original': "STRING",'data-large': "STRING"},hashContexts:{'data-src': depth0,'data-id': depth0,'data-original': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" \n										 src=\"http://placehold.it/80x80&text=Loading...\" class=\"lazy img-responsive\" width=\"80\" height=\"80\"/>-->\n								</a>\n							</div>\n						");
  return buffer;
  }

  data.buffer.push("<div class=\"mainartImg\">\n				<div class=\"lrgArtImg tooltipme\"  data-rel=\"tooltip\" title=\"Drag me up and Down!\">\n								");
  stack1 = helpers['if'].call(depth0, "artwork.mainimageid.imagepath", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</div>\n				<ol class=\"breadcrumb art\">\n								<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n								<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "artworks", options) : helperMissing.call(depth0, "link-to", "artworks", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n								<li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "artwork.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n								</ol>\n				<div class=\"col-sm-12\">\n					<div class=\"col-sm-4 pull-left\">\n					<h1>");
  stack1 = helpers._triageMustache.call(depth0, "artwork.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n					<em>By <strong>");
  stack1 = helpers._triageMustache.call(depth0, "artwork.author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> ");
  stack1 = helpers._triageMustache.call(depth0, "artwork.diffForHumans", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em><br><br>\n					<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("seemore")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "expandDesc", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "artwork.text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n					");
  stack1 = helpers['if'].call(depth0, "seemore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<div class=\"clearfix\"></div>\n					");
  stack1 = helpers.each.call(depth0, "tag", "in", "artwork.tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n					</div>\n					<div class=\"col-sm-6 pull-right\">\n						<h5 class=\"text-uppercase\"><strong>Gallery Images</strong></h5>\n							<div class=\"pull-left\">\n								");
  stack1 = helpers['if'].call(depth0, "artwork.mainimageid.thumbpath", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</div>\n						");
  stack1 = helpers.each.call(depth0, "aux", "in", "artwork.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						<div class=\"clearfix\"></div>\n						<ul class=\"sharesies unstyled\">\n							<li class=\"pull-right\">\n								<a class=\"socialite twitter-share\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("artwork.tweetthis")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\"><i class=\"icon-round icon-twitter tooltipme \" data-rel=\"tooltip\" title=\"Share on Twitter\"></i></a>	\n							</li>\n							<li class=\"pull-right\">\n								<a class=\"socialite\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("artwork.pinthis")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\"><i class=\"icon-round icon-pinterest tooltipme\" data-rel=\"tooltip\" title=\"Pin this Art\"></i></a>	\n							</li>\n							<li class=\"pull-right\">\n								<a class=\"socialite\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("artwork.googleplus")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\"><i class=\"icon-round icon-googleplus tooltipme\" data-rel=\"tooltip\" title=\"+1 on Google\"></i></a>\n							</li>\n							<li class=\"pull-right\">\n								<a class=\"socialite\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("artwork.facebookthis")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\"><i class=\"icon-round icon-facebook tooltipme\" data-rel=\"tooltip\" title=\"Share on Facebook\"></i></a>\n							</li>\n							<!--<li class=\"pull-right\">\n								<a class=\"socialite\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("artwork.mainimageid.imagepath")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\"><i class=\"icon-round icon-download tooltipme\" data-rel=\"tooltip\" title=\"Downloadsies!\"></i></a>\n							</li>-->\n							<li class=\"pull-right\">Sharesies!</li>\n						</ul>\n						\n					</div>\n				</div>\n				<hr>\n						<div class=\"container\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DisqusView", {hash:{
    'postBinding': ("controller.content")
  },hashTypes:{'postBinding': "STRING"},hashContexts:{'postBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>		\n			</div>\n");
  data.buffer.push(escapeExpression((helper = helpers.headTitle || (depth0 && depth0.headTitle),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "artwork.title", options) : helperMissing.call(depth0, "headTitle", "artwork.title", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.headDescription || (depth0 && depth0.headDescription),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "artwork.text", options) : helperMissing.call(depth0, "headDescription", "artwork.text", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.headKeywords || (depth0 && depth0.headKeywords),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "getKeywords", options) : helperMissing.call(depth0, "headKeywords", "getKeywords", options))));
  return buffer;
  
});

Ember.TEMPLATES["components/image-loader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"css_spinner\">\n          <div class=\"half left\">\n             <div class=\"band\"></div>\n		  </div>\n		  <div class=\"half right\">\n	      <div class=\"band\"></div>\n       </div>\n    </div>\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("src"),
    'width': ("width"),
    'height': ("height")
  },hashTypes:{'src': "ID",'width': "ID",'height': "ID"},hashContexts:{'src': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-responsive\" />");
  return buffer;
  
});

Ember.TEMPLATES["components/login-detail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<p>Index</p>");
  
});

Ember.TEMPLATES["editarticle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseMainImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<li class=\"pull-left\">\n								<a class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAuxImage", "auximage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("auximage.thumbpath"),
    'data-original': ("auximage.thumbpath"),
    'data-id': ("auximage.id"),
    'data-large': ("auximage.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\">\n									<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n								</a>\n							</li>\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n							<li class=\"alert alert-success\" role=\"alert\">No Images Selected, Which is fine, you don't have to :)</li>\n						");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAuxImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Go Back");
  }

  data.buffer.push("<h2 class=\"text-right\">Edit ");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2><hr>\n			<form class=\"form-horizontal\" role=\"form\">\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Title</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTitle"),
    'placeholder': ("Article Title"),
    'valueBinding': ("model.title")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleMainImage\" class=\"col-sm-2 control-label\">Main Image</label>\n					<div class=\"mainimageContainer col-sm-10\">\n						<div class=\"btn-group btn-group-justified cropMainImageTour\">\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-1 btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Choose Image <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-2 btn btn-default disabled\">Crop Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-3 btn btn-default disabled\">Commit Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImagestepReset btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetMainImg", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-refresh \"></i> Clear Main Image</button>\n							</div>\n						</div>\n						<div class=\"mainimageinputs hide\">\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImage"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimage")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImageId"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimageid")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n						</div>\n						<div class=\"editMainImageTools\">\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitCrop\" data-func=\"crop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-edit\"></i> Crop</button>							\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitImage\" id=\"btnCommitImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentMainImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-floppy-save\"></i> Commit Cropped Image</button>						\n						</div>\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<button class=\"btn btn-block toggleMainImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Select an Image</button>\n						<div class=\"mainimageTray collapse imageTray\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleText\" class=\"col-sm-2 control-label\">Text</label>\n					<div class=\"textContainer col-sm-10\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TinymceView", {hash:{
    'class': ("form-control "),
    'id': ("txtArticleText"),
    'placeholder': ("This is the article body"),
    'valueBinding': ("model.text")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				</div>				\n				<div class=\"form-group\">\n					<label for=\"txtArticleTags\" class=\"col-sm-2 control-label\">Tags</label>\n					<div class=\"tagsContainer col-sm-10\">\n						<div class=\"input-group col-sm-7 pull-left chooseTags\">\n							<span class=\"input-group-btn\">\n								<button class=\"btn btn-default btn-success\"><i class=\"glyphicon glyphicon-tags\"></i> Choose Tags</button>\n							</span>\n							");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Chosen", {hash:{
    'contentBinding': ("keywords"),
    'optionLabelPath': ("content.name"),
    'selectionBinding': ("controller.curTags"),
    'multiple': ("multiple"),
    'data-function': ("updateTags"),
    'class': ("form-control chosen")
  },hashTypes:{'contentBinding': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'multiple': "STRING",'data-function': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'multiple': depth0,'data-function': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n						</div>\n						<div class=\"input-group col-sm-4 pull-right\">\n							<input type=\"text\" id=\"txtAddTag\" class=\"form-control\">\n							<span class=\"input-group-btn\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTag", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-primary\" type=\"button\"><i class=\"glyphicon glyphicon-tag\"></i> Add Tag</button>\n							</span>\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuxImages\" class=\"col-sm-2 control-label\">More Images?</label>\n					<div class=\"auxImagesContainer col-sm-10\">\n						<ul class=\"media-grid unstyled\">\n						");
  stack1 = helpers.each.call(depth0, "auximage", "in", "model.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n						<br>\n						<button class=\"btn btn-block toggleAuxImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAuxImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Images</button>\n						<div class=\"auximageTray imageTray collapse\">\n							<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button>--><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuthor\" class=\"col-sm-2 control-label\">Author</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("txtArticleAuthor"),
    'class': ("form-control"),
    'valueBinding': ("model.author")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"col-sm-2 control-label\"></div>\n					<div class=\"col-sm-10\">\n						<div class=\"btn-group btn-group-justified articleFunctions\">\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previewArticle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-globe\"></i> Preview </button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-ban-circle\"></i> Reset </button>\n							</div>\n							<div class=\"btn-group\">\n								<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-floppy-saved\"></i> Save </button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n			</form>\n			\n			\n			<div class=\"col-sm-12 modelPreview articlePreview collapse\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['article-details'] || (depth0 && depth0['article-details']),options={hash:{
    'article': ("model")
  },hashTypes:{'article': "ID"},hashContexts:{'article': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "article-details", options))));
  data.buffer.push("\n			</div>\n			<br>\n			<div class=\"clearfix\"></div>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>");
  return buffer;
  
});

Ember.TEMPLATES["editartwork"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseMainImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<li class=\"pull-left\">\n								<a class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAuxImage", "auximage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("auximage.thumbpath"),
    'data-original': ("auximage.thumbpath"),
    'data-id': ("auximage.id"),
    'data-large': ("auximage.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\">\n									<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n								</a>\n							</li>\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n							<li class=\"alert alert-success\" role=\"alert\">No Images Selected, Which is fine, you don't have to :)</li>\n						");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAuxImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Go Back");
  }

  data.buffer.push("	<h2 class=\"text-right\">Edit ");
  stack1 = helpers._triageMustache.call(depth0, "model.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2><hr>\n			<form class=\"form-horizontal\" role=\"form\">\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Title</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTitle"),
    'placeholder': ("Artwork Title"),
    'valueBinding': ("model.title")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleMainImage\" class=\"col-sm-2 control-label\">Main Image</label>\n					<div class=\"mainimageContainer col-sm-10\">\n						<div class=\"btn-group btn-group-justified cropMainImageTour\">\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-1 btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Choose Image <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-2 btn btn-default disabled\">Crop Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-3 btn btn-default disabled\">Commit Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImagestepReset btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetMainImg", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-refresh \"></i> Clear Main Image</button>\n							</div>\n						</div>\n						<div class=\"mainimageinputs hide\">\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImage"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimage")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImageId"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimageid")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n						</div>\n						<div class=\"editMainImageTools\">\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitCrop\" data-func=\"crop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-edit\"></i> Crop</button>							\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitImage\" id=\"btnCommitImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentMainImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-floppy-save\"></i> Commit Cropped Image</button>						\n						</div>\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<button class=\"btn btn-block toggleMainImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Select an Image</button>\n						<div class=\"mainimageTray collapse imageTray\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleText\" class=\"col-sm-2 control-label\">Text</label>\n					<div class=\"textContainer col-sm-10\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TinymceView", {hash:{
    'class': ("form-control "),
    'id': ("txtArticleText"),
    'placeholder': ("This is the article body"),
    'valueBinding': ("model.text")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				</div>				\n				<div class=\"form-group\">\n					<label for=\"txtArticleTags\" class=\"col-sm-2 control-label\">Tags</label>\n					<div class=\"tagsContainer col-sm-10\">\n						<div class=\"input-group col-sm-7 pull-left chooseTags\">\n							<span class=\"input-group-btn\">\n								<button class=\"btn btn-default btn-success\"><i class=\"glyphicon glyphicon-tags\"></i> Choose Tags</button>\n							</span>\n							");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Chosen", {hash:{
    'contentBinding': ("keywords"),
    'optionLabelPath': ("content.name"),
    'selectionBinding': ("controller.curTags"),
    'multiple': ("multiple"),
    'data-function': ("updateTags"),
    'class': ("form-control chosen")
  },hashTypes:{'contentBinding': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'multiple': "STRING",'data-function': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'multiple': depth0,'data-function': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n						</div>\n						<div class=\"input-group col-sm-4 pull-right\">\n							<input type=\"text\" id=\"txtAddTag\" class=\"form-control\">\n							<span class=\"input-group-btn\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTag", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-primary\" type=\"button\"><i class=\"glyphicon glyphicon-tag\"></i> Add Tag</button>\n							</span>\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuxImages\" class=\"col-sm-2 control-label\">More Images?</label>\n					<div class=\"auxImagesContainer col-sm-10\">\n						<ul class=\"media-grid unstyled\">\n						");
  stack1 = helpers.each.call(depth0, "auximage", "in", "model.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n						<br>\n						<button class=\"btn btn-block toggleAuxImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAuxImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Images</button>\n						<div class=\"auximageTray imageTray collapse\">\n							<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button>--><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuthor\" class=\"col-sm-2 control-label\">Author</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("txtArticleAuthor"),
    'class': ("form-control"),
    'valueBinding': ("model.author")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"col-sm-2 control-label\"></div>\n					<div class=\"col-sm-10\">\n						<div class=\"btn-group btn-group-justified articleFunctions\">\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previewArticle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-globe\"></i> Preview </button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-ban-circle\"></i> Reset </button>\n							</div>\n							<div class=\"btn-group\">\n								<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-floppy-saved\"></i> Save </button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n			</form>\n			\n			\n			<div class=\"col-sm-12 modelPreview artworkPreview collapse\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['artwork-details'] || (depth0 && depth0['artwork-details']),options={hash:{
    'artwork': ("model")
  },hashTypes:{'artwork': "ID"},hashContexts:{'artwork': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "artwork-details", options))));
  data.buffer.push("\n			</div>\n			<br>\n			<div class=\"clearfix\"></div>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n			");
  return buffer;
  
});

Ember.TEMPLATES["editimages/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_path\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentImage.imagepath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n						<div class=\"alert alert-warning\" role=\"alert\"><i class=\"glyphicon glyphicon-hand-down\"></i> Please select an image from below</div>\n					");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						<div class=\"pull-left\">\n								");
  stack1 = helpers['if'].call(depth0, "fullPerm", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseImage", "image", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("class=\"thumbnail\"><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.noCacheThumb"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "ID",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a>\n						</div>\n					");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								\n									\n										<button class=\"btn btn-danger absolute littlebutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-trash\"></i></button>\n									\n								\n							");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("No Images\n					");
  }

  data.buffer.push("<div class=\"container\">\n				<div class=\"mainImage col-sm-8 pull-left\">\n					");
  stack1 = helpers['if'].call(depth0, "currentImage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n				</div>\n				<div class=\"mainImageTools col-sm-4 pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n					<button class=\"btn btn-lrg btn-block btn-success\" id=\"btnCommitImage\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentImage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" >\n						<i class=\"glyphicon glyphicon-ok\" ></i> Commit Image\n					</button>\n					<button class=\"btn btn-lrg btn-block\" id=\"btnResetImage\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetImg", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n						<i class=\"glyphicon glyphicon-refresh\"></i> Reset Image\n					</button><hr>\n					");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "imagetools", options) : helperMissing.call(depth0, "render", "imagetools", options))));
  data.buffer.push("\n			</div>\n			</div>\n			\n			\n			<div class=\"container imageContainer imageContainerBottom\">\n				<button class=\"btn btn-block btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture icon-white\"></i> Select Image</button>\n				<div class=\"span imageTrayBottom collapse\">\n					<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n					");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n				</div>\n			</div>");
  return buffer;
  
});

Ember.TEMPLATES["editsite"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseMainImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<li class=\"pull-left\">\n								<a class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAuxImage", "auximage", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n									<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("auximage.thumbpath"),
    'data-original': ("auximage.thumbpath"),
    'data-id': ("auximage.id"),
    'data-large': ("auximage.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\">\n									<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n								</a>\n							</li>\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n							<li class=\"alert alert-success\" role=\"alert\">No Images Selected, Which is fine, you don't have to :)</li>\n						");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n								<div class=\"pull-left\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAuxImage", "image", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail\" ><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.thumbpath"),
    'data-original': ("image.thumbpath"),
    'data-id': ("image.id"),
    'data-large': ("image.imagepath")
  },hashTypes:{'src': "STRING",'data-original': "STRING",'data-id': "STRING",'data-large': "STRING"},hashContexts:{'src': depth0,'data-original': depth0,'data-id': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"80\" height=\"80\" class=\"lazy\"/></a></div>\n							");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Go Back");
  }

  data.buffer.push("<h2 class=\"text-right\">Create A New Article</h2><hr>\n			<form class=\"form-horizontal\" role=\"form\">\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Title</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTitle"),
    'placeholder': ("Article Title"),
    'valueBinding': ("model.title")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">URL</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleUrl"),
    'placeholder': ("http://jaredjkramer.com"),
    'valueBinding': ("model.url")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleTitle\" class=\"col-sm-2 control-label\">Tech</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("txtArticleTech"),
    'placeholder': ("Ember.js, PHP"),
    'valueBinding': ("model.tech")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleMainImage\" class=\"col-sm-2 control-label\">Main Image</label>\n					<div class=\"mainimageContainer col-sm-10\">\n						<div class=\"btn-group btn-group-justified cropMainImageTour\">\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-1 btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Choose Image <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-2 btn btn-default disabled\">Crop Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImageStep mainImagestep-3 btn btn-default disabled\">Commit Image  <i class=\"glyphicon glyphicon-ok hide\"></i></button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"mainImagestepReset btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetMainImg", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-refresh \"></i> Clear Main Image</button>\n							</div>\n						</div>\n						<div class=\"mainimageinputs hide\">\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImage"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimage")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control disabled"),
    'id': ("txtArticleMainImageId"),
    'disabled': ("disabled"),
    'valueBinding': ("model.mainimageid")
  },hashTypes:{'class': "STRING",'id': "STRING",'disabled': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'disabled': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n						</div>\n						<div class=\"editMainImageTools\">\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitCrop\" data-func=\"crop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-edit\"></i> Crop</button>							\n								<button class=\"btn btn-default btn-info btn-block hide btnCommitImage\" id=\"btnCommitImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitImage", "currentMainImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-floppy-save\"></i> Commit Cropped Image</button>						\n						</div>\n						<div class=\"img-container\"><img id=\"editImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></div>\n						<img id=\"editedImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentMainImage.imagepath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_type\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.imagetype")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.thumbpath")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<input type=\"hidden\" id=\"main_image_id\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("currentMainImage.id")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n						<button class=\"btn btn-block toggleMainImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMainImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Select an Image</button>\n						<div class=\"mainimageTray collapse imageTray\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleText\" class=\"col-sm-2 control-label\">Text</label>\n					<div class=\"textContainer col-sm-10\">\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TinymceView", {hash:{
    'class': ("form-control "),
    'id': ("txtArticleText"),
    'placeholder': ("This is the article body"),
    'valueBinding': ("model.text")
  },hashTypes:{'class': "STRING",'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				</div>				\n				<div class=\"form-group\">\n					<label for=\"txtArticleTags\" class=\"col-sm-2 control-label\">Tags</label>\n					<div class=\"tagsContainer col-sm-10\">\n						<div class=\"input-group col-sm-7 pull-left chooseTags\">\n							<span class=\"input-group-btn\">\n								<button class=\"btn btn-default btn-success\"><i class=\"glyphicon glyphicon-tags\"></i> Choose Tags</button>\n							</span>\n							");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Chosen", {hash:{
    'contentBinding': ("keywords"),
    'optionLabelPath': ("content.name"),
    'selectionBinding': ("controller.curTags"),
    'multiple': ("multiple"),
    'data-function': ("updateTags"),
    'class': ("form-control chosen")
  },hashTypes:{'contentBinding': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'multiple': "STRING",'data-function': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'multiple': depth0,'data-function': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n						</div>\n						<div class=\"input-group col-sm-4 pull-right\">\n							<input type=\"text\" id=\"txtAddTag\" class=\"form-control\">\n							<span class=\"input-group-btn\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTag", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-primary\" type=\"button\"><i class=\"glyphicon glyphicon-tag\"></i> Add Tag</button>\n							</span>\n						</div>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuxImages\" class=\"col-sm-2 control-label\">More Images?</label>\n					<div class=\"auxImagesContainer col-sm-10\">\n						<ul class=\"media-grid unstyled\">\n						");
  stack1 = helpers.each.call(depth0, "auximage", "in", "model.auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</ul>\n						<br>\n						<button class=\"btn btn-block toggleAuxImageTray btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAuxImageTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-picture\"></i> Choose Images</button>\n						<div class=\"auximageTray imageTray collapse\">\n							<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upDateImages", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary updateImages hide\">Refresh these foos</button>--><div class=\"clearFix\"></div>\n							");
  stack1 = helpers.each.call(depth0, "image", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					\n				</div>\n				<div class=\"form-group\">\n					<label for=\"txtArticleAuthor\" class=\"col-sm-2 control-label\">Author</label>\n					<div class=\"col-sm-10\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("txtArticleAuthor"),
    'class': ("form-control"),
    'valueBinding': ("model.author")
  },hashTypes:{'id': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"col-sm-2 control-label\"></div>\n					<div class=\"col-sm-10\">\n						<div class=\"btn-group btn-group-justified articleFunctions\">\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previewArticle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-globe\"></i> Preview </button>\n							</div>\n							<div class=\"btn-group\">\n								<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-ban-circle\"></i> Reset </button>\n							</div>\n							<div class=\"btn-group\">\n								<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isFullAdmin")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-floppy-saved\"></i> Save </button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n			</form>\n			\n			\n			<div class=\"col-sm-12 modelPreview articlePreview collapse\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['article-details'] || (depth0 && depth0['article-details']),options={hash:{
    'article': ("model")
  },hashTypes:{'article': "ID"},hashContexts:{'article': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "article-details", options))));
  data.buffer.push("\n			</div>\n			<br>\n			<div class=\"clearfix\"></div>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>");
  return buffer;
  
});

Ember.TEMPLATES["imagetools"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"panel-group\" id=\"editImageAccordion\">\n						<div class=\"panel panel-default\">\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "cropping", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageCrop\">\n								<i class=\"glyphicon glyphicon-retweet\"></i> Crop Image</a></h4>\n							</div>\n							<div id=\"imageCrop\" class=\"panel-collapse collapse\">\n								<div class=\"panel-body\">\n									<div class=\"img-preview \"></div>\n									<button class=\"killCrop hide\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "killCrop", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></button>\n									<div class=\"btn-group btn-block\">\n										<button class=\"btn btn-primary disabled toggleCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCrop", "currentImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n											<i class=\"glyphicon glyphicon-edit\"></i> Toggle Crop\n										</button>\n										<button data-func=\"crop\" class=\"btn btn-success disabled commitCrop\" id=\"btnCommitCrop\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitCrop", "currentImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n											<i class=\"glyphicon glyphicon-ok\"></i> Commit Crop\n										</button>\n									</div>\n								</div>\n							</div>\n							\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "flip", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageFlip\"><i class=\"glyphicon glyphicon-share-alt\"></i> Flip Image</a></h4>\n							</div>\n							<div id=\"imageFlip\" class=\"panel-collapsse collapse\">\n								<div class=\"panel-body\">\n									<button class=\"btn btn-primary imageFunc\" data-func=\"fliph\" id=\"btnFlipHorz\"><i class=\"glyphicon glyphicon-arrow-right\"></i> Horizontal Flip</button>\n									<button class=\"btn btn-primary imageFunc\" data-func=\"flipv\" id=\"btnFlipVert\"><i class=\"glyphicon glyphicon-arrow-up\"></i> Vertical Flip</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "blur", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageBlur\"><i class=\"glyphicon glyphicon-eye-close\"></i> Blur Image</a></h4>\n							</div>\n							<div id=\"imageBlur\" class=\"panel-collapse collapse\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"blurVal\" class=\"col-sm-3\">Amount</label>\n										<input id=\"blurVal\" data-param=\"amount\" class=\"bslider blurVal\" data-slider-id=\"blurValue\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"5\" data-slider-step=\"0.01\" data-slider-tooltip=\"show\" data-slider-precision=\"2\"  data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"blurfast\" id=\"btnBlur\"><i class=\"glyphicon glyphicon-eye-close\"></i> Blur</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "sharpen", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageSharpen\"><i class=\"glyphicon glyphicon-pushpin\"></i> Sharpen Image</a></h4>\n							</div>\n							<div id=\"imageSharpen\" class=\"panel-collapse collapse\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"sharpenVal\" class=\"col-sm-3\">Amount</label>\n										<input id=\"sharpenVal\" data-param=\"amount\" class=\"bslider sharpenVal\" data-slider-id=\"sharpenValue\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"1\" data-slider-step=\"0.01\" data-slider-tooltip=\"show\" data-slider-precision=\"2\"  data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"sharpen\" id=\"btnSharpen\"><i class=\"glyphicon glyphicon-pushpin\"></i> Sharpen</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hsl", "flip", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageHSL\"><i class=\"glyphicon glyphicon-adjust\"></i> Hue / Saturation / Lightness</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imageHSL\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"hueVal\" class=\"col-sm-3\">Hue&nbsp;</label>\n										<input id=\"hueVal\" data-param=\"hue\" class=\"bslider hueVal\" data-slider-id=\"HueVal\" type=\"text\" data-slider-min=\"-180\" data-slider-step=\"1\" data-slider-max=\"180\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"saturVal\" class=\"col-sm-3\">Saturation&nbsp;</label>\n										<input id=\"saturVal\" data-param=\"saturation\" class=\"bslider saturVal\" data-slider-id=\"saturationVal\" type=\"text\" data-slider-min=\"-100\" data-slider-step=\"1\" data-slider-max=\"100\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"lightVal\" class=\"col-sm-3\">Lightness&nbsp;</label>\n										<input id=\"lightVal\" data-param=\"lightness\" class=\"bslider lightVal\" data-slider-id=\"lightnessVal\" type=\"text\" data-slider-min=\"-100\" data-slider-step=\"1\" data-slider-max=\"100\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"hsl\" id=\"btnHSL\"><i class=\"glyphicon glyphicon-adjust\"></i> HSL Adjust</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "rgb", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageRGB\"><i class=\"glyphicon glyphicon-tint\"></i> Adjust RGB</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imageRGB\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"redVal\" class=\"col-sm-3\">Red&nbsp;</label>\n										<input id=\"redVal\" class=\"bslider redVal\" data-param=\"red\" data-slider-id=\"redValue\" type=\"text\" data-slider-min=\"-1\" data-slider-step=\"0.01\" data-slider-max=\"1\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" data-slider-precision=\"2\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"greenVal\" class=\"col-sm-3\">Green&nbsp;</label>\n										<input id=\"greenVal\" data-param=\"green\" class=\"bslider greenVal\" data-slider-id=\"greenValue\" type=\"text\" data-slider-min=\"-1\" data-slider-step=\"0.01\" data-slider-max=\"1\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" data-slider-precision=\"2\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"blueVal\" class=\"col-sm-3\">Blue&nbsp;</label>\n										<input id=\"blueVal\" data-param=\"blue\" class=\"bslider blueVal\" data-slider-id=\"blueValue\" type=\"text\" data-slider-min=\"-1\" data-slider-step=\"0.01\" data-slider-max=\"1\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" data-slider-precision=\"2\" />\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"coloradjust\" id=\"btnRGB\"><i class=\"glyphicon glyphicon-tint\"></i> RGB Adjust</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "bc", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageBC\"><i class=\"glyphicon glyphicon-flash\"></i> Brightness / Contrast</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imageBC\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"brightVal\" class=\"col-sm-3\">Brightness&nbsp;</label>\n										<input id=\"brightVal\" data-param=\"brightness\" class=\"bslider brightVal\" data-slider-id=\"brigntnessVal\" type=\"text\" data-slider-min=\"-150\" data-slider-max=\"150\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"conVal\" class=\"col-sm-3\">Contrast&nbsp;</label>\n										<input id=\"conVal\" class=\"bslider conVal\" data-param=\"contrast\" data-slider-id=\"contrastVal\" type=\"text\" data-slider-min=\"-150\" data-slider-max=\"150\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"brightness\" id=\"btnBC\"><i class=\"glyphicon glyphicon-flash\"></i> Adjust Brightness / Contrast</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "noise", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageNoise\"><i class=\"glyphicon glyphicon-map-marker\"></i> Add Noise</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imageNoise\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"noiseAmtVal\" class=\"col-sm-3\">Amount&nbsp;</label>\n										<input id=\"noiseAmtVal\" data-param=\"amount\" class=\"bslider noiseAmtVal\" data-slider-id=\"noiseAmountVal\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"1\" data-slider-step=\"0.01\" data-slider-precision=\"2\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"noiseStrVal\" class=\"col-sm-3\">Strength&nbsp;</label>\n										<input id=\"noiseStrVal\" data-param=\"strength\" class=\"bslider noiseStrVal\" data-slider-id=\"noiseStrengthVal\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"1\" data-slider-step=\"0.01\" data-slider-precision=\"2\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" />\n									</div>\n										<input id=\"noiseMonoVal\" type=\"hidden\" value=\"\" data-param=\"mono\" />\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"noise\" id=\"btnNoise\"><i class=\"glyphicon glyphicon-map-marker\"></i> Add Noise</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "pixelate", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imagePixelate\"><i class=\"glyphicon glyphicon-th-large\"></i> Pixelate</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imagePixelate\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"pixelVal\" class=\"col-sm-3\">Amount&nbsp;</label>\n										<input id=\"pixelVal\" data-param=\"blockSize\" class=\"bslider pixelVal\" data-slider-id=\"pixelateVal\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"100\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\"/>\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"mosaic\" id=\"btnPixel\"><i class=\"glyphicon glyphicon-th-large\"></i> Pixelate</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "pointillize", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imagePointillize\"><i class=\"glyphicon glyphicon-record\"></i> Pointillize</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imagePointillize\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"pointradiusVal\" class=\"col-sm-3\">Radius&nbsp;</label>\n										<input id=\"pointradiusVal\" data-param=\"radius\" class=\"bslider pointradiusVal\" data-slider-id=\"pointRadiusValue\" type=\"text\" data-slider-min=\"0\" d data-slider-max=\"100\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" data-slider-precision=\"2\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"pointdensityVal\" class=\"col-sm-3\">Density&nbsp;</label>\n										<input id=\"pointdensityVal\" data-param=\"density\" class=\"bslider pointdensityVal\" data-slider-id=\"pointDensityValue\" type=\"text\" data-slider-min=\"0\" data-slider-step=\"0.01\" data-slider-max=\"5\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" data-slider-precision=\"2\" />\n									</div>\n									<div class=\"form-group\">\n										<label for=\"pointnoiseVal\" class=\"col-sm-3\">Noise&nbsp;</label>\n										<input id=\"pointnoiseVal\" data-param=\"noise\"class=\"bslider pointnoiseVal\" data-slider-id=\"pointNoiseValue\" type=\"text\" data-slider-min=\"0\" data-slider-step=\"0.01\" data-slider-max=\"2\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\" data-slider-precision=\"2\" />\n									</div>\n									<input type=\"hidden\" data-param=\"transparent\" value=\"\" />\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"pointillize\" id=\"btnPointillize\"><i class=\"glyphicon glyphicon-record\"></i> Pointillize</button>\n								</div>\n							</div>\n							\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "posterize", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imagePosterize\"><i class=\"glyphicon glyphicon-picture\"></i> Posterize</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imagePosterize\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"posterizeVal\" class=\"col-sm-3\">Levels&nbsp;</label>\n										<input id=\"posterizeVal\" data-param=\"levels\" class=\"bslider posterizeVal\" data-slider-id=\"posterizeVal\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"100\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-value=\"0\"/>\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" data-func=\"posterize\" id=\"btnPosterize\"><i class=\"glyphicon glyphicon-picture\"></i> Posterize</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "glow", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageGlow\"><i class=\"glyphicon glyphicon-fire\"></i> Glow</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imageGlow\">\n								<div class=\"panel-body\">\n									<div class=\"form-group\">\n										<label for=\"glowAmtVal\" class=\"col-sm-3\">Amount&nbsp;</label>\n										<input id=\"glowAmtVal\" data-param=\"amount\" class=\"bslider glowAmtVal\" data-slider-id=\"glowAmount\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"1\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-precision=\"2\" data-slider-step=\"0.01\" data-slider-value=\"0\"/>\n									</div>\n									<div class=\"form-group\">\n										<label for=\"glowRadVal\" class=\"col-sm-3\">Radius&nbsp;</label>\n										<input id=\"glowRadVal\" data-param=\"radius\" class=\"bslider glowRadVal\" data-slider-id=\"glowRadius\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"1\" data-slider-tooltip=\"show\" data-slider-handle=\"square\" data-slider-precision=\"2\" data-slider-step=\"0.01\" data-slider-value=\"0\"/>\n									</div>\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" id=\"btnGlow\" data-func=\"glow\"><i class=\"glyphicon glyphicon-fire\"></i> Add Glow</button>\n								</div>\n							</div>\n							<div class=\"panel-heading\">\n								<h4 class=\"panel-title\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageTool", "sepia", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" data-parent=\"#editImageAccordion\" href=\"#imageSepia\"><i class=\"glyphicon glyphicon-camera\"></i> Sepia</a></h4>\n							</div>\n							<div class=\"panel-collapse collapse\" id=\"imageSepia\">\n								<div class=\"panel-body\">\n									<button class=\"btn btn-primary imageFunc pull-left btn-block\" id=\"btnSepia\" data-func=\"sepia\"><i class=\"glyphicon glyphicon-camera\"></i> Add Sepia</button>\n								</div>\n							</div>\n						</div>\n					</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "articles", "sortedModel", options) : helperMissing.call(depth0, "render", "articles", "sortedModel", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<h6 class=\" text-center alert alert-info alert-grey text-uppercase  text-muted\">Here's some Art | ");
  stack1 = helpers._triageMustache.call(depth0, "totalArt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Results</h6>\n		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'classNames': ("col-sm-12")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artworks", "sortedArtworks", options) : helperMissing.call(depth0, "render", "artworks", "sortedArtworks", options))));
  data.buffer.push("\n		");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n			<h6 class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No art found.</h6>\n		");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<h6 class=\" text-center alert alert-info alert-grey text-uppercase text-muted\">Here's some Stories | ");
  stack1 = helpers._triageMustache.call(depth0, "totalArticles", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Results</h6>\n		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "articles", "sortedModel", options) : helperMissing.call(depth0, "render", "articles", "sortedModel", options))));
  data.buffer.push("\n		");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n			<h6 class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No articles found.</h6>\n		");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<h6 class=\" text-center alert alert-info alert-grey  text-uppercase text-muted\">Here's some Nerdery Posts | ");
  stack1 = helpers._triageMustache.call(depth0, "totalSites", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Results</h6>\n		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'classNames': ("col-sm-12")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "sites", "sortedSites", options) : helperMissing.call(depth0, "render", "sites", "sortedSites", options))));
  data.buffer.push("\n		");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n			<h6 class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No posts found.</h6>\n		");
  }

  data.buffer.push("<h1 class=\"fittext text-center\">Here's what I found (");
  stack1 = helpers._triageMustache.call(depth0, "totalResults", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Results)</h1><div class=\"clearfix\"></div><hr>\n<ul class=\"nav nav-pills nav-justified nav-jjkramer-black searchresults\" role=\"tablist\">\n		<li class=\" active\"><a href=\"#artresults\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicons white  brush\"></i> Artwork</a></li>\n		<li class=\"\"><a href=\"#articleresults\" role=\"tab\" data-toggle=\"tab\"> <i class=\"glyphicons white  globe\"></i> Articles</a></li>\n		<li class=\"\"><a href=\"#webresults\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicons white embed_close\"></i> Nerdery</a></li>\n</ul>\n\n<div class=\"tab-content\">\n	<div class=\"tab-pane active\" id=\"artresults\">\n		");
  stack1 = helpers['if'].call(depth0, "hasArt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n	<div class=\"tab-pane\" id=\"articleresults\">\n		");
  stack1 = helpers['if'].call(depth0, "hasArticles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n	<div class=\"tab-pane\" id=\"webresults\">\n		");
  stack1 = helpers['if'].call(depth0, "hasSites", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["site"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("The Nerdery");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("span"),
    'classNames': ("label label-jjkramer")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "taggedsites", "tag.name", options) : helperMissing.call(depth0, "link-to", "taggedsites", "tag.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\n		");
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n			<span class=\"label label-default\">No Tags</span>\n		");
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"pull-left\">\n				<a class=\"thumbnail lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("aux.imagepath"),
    'data-lightbox': ("article.id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                     ");
  data.buffer.push(escapeExpression((helper = helpers['image-loader'] || (depth0 && depth0['image-loader']),options={hash:{
    'src': ("aux.thumbpath"),
    'width': ("80"),
    'height': ("80")
  },hashTypes:{'src': "ID",'width': "STRING",'height': "STRING"},hashContexts:{'src': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-loader", options))));
  data.buffer.push("\n                    <!--<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-src': ("aux.thumbpath"),
    'data-id': ("aux.id"),
    'data-original': ("aux.thumbpath"),
    'data-large': ("aux.imagepath")
  },hashTypes:{'data-src': "STRING",'data-id': "STRING",'data-original': "STRING",'data-large': "STRING"},hashContexts:{'data-src': depth0,'data-id': depth0,'data-original': depth0,'data-large': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        src=\"http://placehold.it/80x80&text=Loading...\" class=\"lazy img-responsive\" width=\"80\" height=\"80\"/>-->\n				</a>\n            </div>\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"well\">No additional Images</div>\n        ");
  }

  data.buffer.push("<ol class=\"breadcrumb\">\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sites", options) : helperMissing.call(depth0, "link-to", "sites", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ol>\n<div class=\"row articledetails col-sm-9 pull-right\">\n	\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <div class=\"articlecredits\">\n        <em>By <strong>");
  stack1 = helpers._triageMustache.call(depth0, "author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> ");
  stack1 = helpers._triageMustache.call(depth0, "diffForHumans", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em><br>\n    </div>\n    <div class=\"articlekeywords\">\n		");
  stack1 = helpers.each.call(depth0, "tag", "in", "tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n    <div class=\"articlemainimage pull-left siteimage\">\n        <a class=\"lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("mainimageid.imagepath"),
    'data-lightbox': ("id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n			<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("mainimage"),
    'data-src': ("mainimage"),
    'data-original': ("mainimage")
  },hashTypes:{'src': "STRING",'data-src': "STRING",'data-original': "STRING"},hashContexts:{'src': depth0,'data-src': depth0,'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  class=\" img-responsive\" width=\"150\" height=\"150\"/>\n		</a>\n    </div><br>\n    <div class=\"articletext sitetext\">\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"clearfix\"></div>\n    <strong>Tech Used</strong>&nbsp;");
  stack1 = helpers._triageMustache.call(depth0, "tech", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n    <hr>\n    <div class=\"articleauximages\">\n        <strong>IMAGES ARE FUN!</strong><br>\n        ");
  stack1 = helpers.each.call(depth0, "aux", "in", "auximages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"clearfix\"></div>\n    <hr>\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default pull-right btn-block\" target=\"_blank\"><i class=\"glyphicons more_windows \"></i>Launch</a>\n    <div class=\"clearfix\"></div>\n		");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DisqusView", {hash:{
    'postBinding': ("controller.content")
  },hashTypes:{'postBinding': "STRING"},hashContexts:{'postBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  data.buffer.push(escapeExpression((helper = helpers.headTitle || (depth0 && depth0.headTitle),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "title", options) : helperMissing.call(depth0, "headTitle", "title", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.headDescription || (depth0 && depth0.headDescription),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "text", options) : helperMissing.call(depth0, "headDescription", "text", options))));
  return buffer;
  
});

Ember.TEMPLATES["sites"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<!-- updated content-->\n				\n                <div class=\"col-sm-12 pull-right wobble-vertical\">\n                ");
  stack1 = helpers['if'].call(depth0, "isFullAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <ul class=\"sites media-list \">\n                        <li class=\"media\">\n                            <a class=\"pull-left lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("site.mainimageid.imagepath"),
    'data-lightbox': ("site.id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("site.mainimage"),
    'data-src': ("site.mainimage"),
    'data-original': ("site.mainimage")
  },hashTypes:{'src': "STRING",'data-src': "STRING",'data-original': "STRING"},hashContexts:{'src': depth0,'data-src': depth0,'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  class=\" img-responsive\" width=\"150\" height=\"150\" />\n                            </a>\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div"),
    'classNames': ("media-body")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "site", "site.id", "site.slug", options) : helperMissing.call(depth0, "link-to", "site", "site.id", "site.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-12 pull-right \">\n                    <hr>\n                </div>\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					<div class=\"articleActions pull-right siteactions\">\n						<div class=\"btn-group pull-right\">\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-primary")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "editsite", "site.id", options) : helperMissing.call(depth0, "link-to", "editsite", "site.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							<button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "site", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-trash\"></i></button>\n						</div>\n					</div>\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-edit\"></i>");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            <div class=\"media-body\">\n                                <h2 class=\"media-heading text-uppercase site-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "site.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                                <div class=\"site-text shortened\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "site.text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-inverse pull-right")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "site", "site.id", "site.slug", options) : helperMissing.call(depth0, "link-to", "site", "site.id", "site.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                            ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("Read More");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"alert alert-grey col-sm-12 pull-right text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No Sites.</div>\n			");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"alert alert-info alert-grey loading text-center has-spinner active articletext\"><i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></i> Loading More...</div>\n            ");
  }

  stack1 = helpers.each.call(depth0, "site", "in", "updatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			<div class=\"clearfix\"></div>\n            ");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"col-sm-12 pull-right\">\n                <button class=\"btn btn-default btn-inverse btn-block loadMore\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasMore")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicons white roundabout\"></i> Load More</button>\n            </div>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.headTitle || (depth0 && depth0.headTitle),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "JaredJKramer.com - I Code things", options) : helperMissing.call(depth0, "headTitle", "JaredJKramer.com - I Code things", options))));
  return buffer;
  
});

Ember.TEMPLATES["sitesearch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["taggedarticles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "articles", "sortedModel", options) : helperMissing.call(depth0, "render", "articles", "sortedModel", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["taggedartworks"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<!-- updatedContent-->\n					");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artthumb", "artwork", options) : helperMissing.call(depth0, "render", "artthumb", "artwork", options))));
  data.buffer.push("\n				");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"alert alert-grey text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No art available.</div>\n				");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n								<div class=\"alert alert-info alert-grey loading text-center has-spinner active articletext\"><i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></i> Loading More...</div>\n								");
  }

  stack1 = helpers.each.call(depth0, "artwork", "in", "updatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				<div class=\"clearfix\"></div>\n								");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			   <button class=\"btn btn-default btn-inverse btn-block loadMore span12 minNinetyFive\"   ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasMore")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicons white roundabout\"></i> Load More</button>\n");
  return buffer;
  
});

Ember.TEMPLATES["taggedsites"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<!-- updated content-->\n				\n                <div class=\"col-sm-12 pull-right wobble-vertical\">\n                ");
  stack1 = helpers['if'].call(depth0, "isFullAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <ul class=\"sites media-list \">\n                        <li class=\"media\">\n                            <a class=\"pull-left lightbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("site.mainimageid.imagepath"),
    'data-lightbox': ("site.id")
  },hashTypes:{'href': "STRING",'data-lightbox': "STRING"},hashContexts:{'href': depth0,'data-lightbox': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("site.mainimage"),
    'data-src': ("site.mainimage"),
    'data-original': ("site.mainimage")
  },hashTypes:{'src': "STRING",'data-src': "STRING",'data-original': "STRING"},hashContexts:{'src': depth0,'data-src': depth0,'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  class=\" img-responsive\" width=\"150\" height=\"150\" />\n                            </a>\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div"),
    'classNames': ("media-body")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "site", "site.id", "site.slug", options) : helperMissing.call(depth0, "link-to", "site", "site.id", "site.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-12 pull-right \">\n                    <hr>\n                </div>\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					<div class=\"articleActions pull-right siteactions\">\n						<div class=\"btn-group pull-right\">\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-primary")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "editsite", "site.id", options) : helperMissing.call(depth0, "link-to", "editsite", "site.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							<button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "site", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-trash\"></i></button>\n						</div>\n					</div>\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-edit\"></i>");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            <div class=\"media-body\">\n                                <h2 class=\"media-heading text-uppercase site-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "site.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                                <div class=\"site-text shortened\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "site.text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-primary pull-right")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "site", "site.id", "site.slug", options) : helperMissing.call(depth0, "link-to", "site", "site.id", "site.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                            ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("Read More");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"alert alert-grey col-sm-12 pull-right text-center\"><i class=\"glyphicon glyphicon-warning-sign\"></i> No Sites.</div>\n			");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"alert alert-info alert-grey loading text-center has-spinner active articletext\"><i class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></i> Loading More...</div>\n            ");
  }

  stack1 = helpers.each.call(depth0, "site", "in", "updatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			<div class=\"clearfix\"></div>\n            ");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"col-sm-12 pull-right\">\n                <button class=\"btn btn-default btn-inverse btn-block loadMore\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("hasMore")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"glyphicons white roundabout\"></i> Load More</button>\n            </div>");
  return buffer;
  
});

Ember.TEMPLATES["toolbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleTray", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"trayToggle\"><i class=\"glyphicon glyphicon-cog\" ></i></div>\n			<div class=\"tray tray-tools col-md-5 collapse\">\n				<div class=\"panel-group\" id=\"toolsAccordion\">\n					<div class=\"panel panel-default\">\n						<div class=\"panel-heading\">\n							<h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#toolsAccordion\" href=\"#crudLinks\"><i class=\"glyphicon glyphicon-dashboard\"></i> Dashboard</a></h4>\n						</div>\n					<div id=\"crudLinks\" class=\"panel-collapse collapse\">\n						<div class=\"panel-body\">\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "addarticles.new", options) : helperMissing.call(depth0, "link-to", "addarticles.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "addartworks.new", options) : helperMissing.call(depth0, "link-to", "addartworks.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "addsites.new", options) : helperMissing.call(depth0, "link-to", "addsites.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n							");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "editimages.edit", options) : helperMissing.call(depth0, "link-to", "editimages.edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>	\n					</div>\n					<div class=\"panel panel-default\">\n						<div class=\"panel-heading\">\n							<h4 class=\"panel-title\"><a  data-toggle=\"collapse\" data-parent=\"#toolsAccordion\" href=\"#uploaderTool\"><i class=\"glyphicon glyphicon-upload\"></i> Upload Images</a></h4>\n						</div>\n						<div id=\"uploaderTool\" class=\"panel-collapse collapse\">\n							<div class=\"panel-body\">\n								");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "uploader", options) : helperMissing.call(depth0, "render", "uploader", options))));
  data.buffer.push("\n							</div>\n						</div>\n					</div>\n					<div class=\"panel panel-default\">\n						<div class=\"panel-heading\">\n							<h4 class=\"panel-title\"><a href=\"auth/logout\"><i class=\"glyphicon glyphicon-log-out\"></i> Logout</a></h4>\n						</div>\n					</div>\n				</div>\n			</div><!-- Comment -->\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-th-list\"></i> New Article");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-pencil\"></i> New Artwork");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("<li class=\"glyphicon glyphicon-globe\"></li> New Site");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("<i class=\"glyphicon glyphicon-picture\"></i> Edit Photos");
  }

  stack1 = helpers['if'].call(depth0, "isFullAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["uploader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				<h3 class=\"uploading-percentage\">Uploaded Percentage: ");
  stack1 = helpers._triageMustache.call(depth0, "uploadStatus.percentComplete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%</h3>\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				");
  stack1 = helpers['if'].call(depth0, "uploadStatus.error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  stack1 = helpers.each.call(depth0, "controller.validFiles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n				");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.MultipleInput", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n			");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"error\">An error occurred during the upload process. Please try again later.</div>\n				");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("className :file")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						<a class=\"remove\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteFile", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Discard.</a>\n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.ImagePreview", {hash:{
    'imageBinding': ("this")
  },hashTypes:{'imageBinding': "STRING"},hashContexts:{'imageBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n					</div>\n				");
  return buffer;
  }

  data.buffer.push("<h1>Upload Files (");
  stack1 = helpers._triageMustache.call(depth0, "files.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" in total)</h1>\n			<ul class=\"counts\">\n				<li class=\"valid\">Valid: ");
  stack1 = helpers._triageMustache.call(depth0, "validFiles.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				<li class=\"invalid\">Invalid: ");
  stack1 = helpers._triageMustache.call(depth0, "invalidFiles.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				<li class=\"uploaded\">Uploaded: ");
  stack1 = helpers._triageMustache.call(depth0, "uploadedFiles.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				<li class=\"deleted\">Deleted: ");
  stack1 = helpers._triageMustache.call(depth0, "deletedFiles.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			</ul>\n			\n			<div class=\"buttons\">\n				<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadAllFiles", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Upload All</button>\n				<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearAllFiles", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Clear</button>\n			</div>\n			\n			");
  stack1 = helpers['if'].call(depth0, "uploadStatus.uploading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n			");
  stack1 = helpers.view.call(depth0, "view.DragDrop", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
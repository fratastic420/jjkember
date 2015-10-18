var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.less('app.less');
    
    //Done. so . commented out.
     mix.styles([
       'hover-min.css',
       'chosen.min.css',
       'bootstrap.3.2.0.css',
       'bootstrap-responsive.css',
       'bootstrap-slider.min.css',
       'bootstrap-modal.css',
       'glyphicons.css',
       'social.css',
       'cropper.css',
       'jjk-icons.css',
       'image-wrapper.css',
       'main.css',
       'imagelightbox.css',
       'default.css'
       //'app.css'
    ], null, 'public/css');
    
    
    mix.copy('templates.js', 'public/js/templates.js');
    
    
    
    
    //I haz to break all deez files up cuz GULP is garbage
    /*.scripts([
        'vendor/jquery-1.10.2.js',
        'vendor/jquery-ui-1.10.4.custom.min.js',
        'vendor/jquery.ui.touch-punch.min.js',
    ], 'public/js/final/jquery-core.js', 'public/js')
    .scripts([
        'vendor/handlebars-1.1.2.js',
        'vendor/ember-1.5.0.min.js',
        'templates.js',
        'vendor/ember-model.js',      
    ], 'public/js/final/ember-core.js', 'public/js') 
    .scripts([
        'vendor/bootstrap.3.2.0.js',
        'vendor/bootstrap-slider.min.js',     
    ], 'public/js/final/bootstrap-core.js', 'public/js')
    .scripts([
        'vendor/jquery.cookie.js',
        'vendor/jquery.fittext.js',
        'vendor/jquery.lettering.min.js',
        'vendor/jquery.noty.packaged.min.js',
        'vendor/jquery.keystrokes.min.js',
        'vendor/jquery.numeric.js',      
    ], 'public/js/final/jquerycomponent-1.js', 'public/js') 
    .scripts([
        'vendor/hex_md5.js',
        'vendor/pixastic.custom.js',
        'vendor/jquery.lazyload.min.js',
        'vendor/jquery.unveil.js',
        'vendor/cropper.0.3.9.js',      
    ],'public/js/final/jquerycomponent-2.js','public/js') 
    .scripts([
        'vendor/imagelightbox.min.js',
        'vendor/imagelightboxfunc.js',
        'vendor/chosen.jquery.js',
        'vendor/socialite.min.js',
        'vendor/tinymce.min.js',
        'vendor/arrive-2.0.0.min.js',      
    ],'public/js/final/jquerycomponent-3.js','public/js')
    mix.scripts([
        'init.js',
        'vendor/ember-droplet-mixin.js',
        'vendor/ember-droplet-view.js',
        'route.js',
        'app.js',
        'view.js',
        'model.js',
        'dom-events.js'     
    ],'public/js/final/ember-app.js','public/js');*/
    
});

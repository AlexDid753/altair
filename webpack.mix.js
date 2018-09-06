let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js/')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .js('resources/assets/js/libs/jquery-3.2.1.min.js', 'public/js/front.js')
    // .js('resources/assets/js/libs/jquery.mCustomScrollbar.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/bootstrap.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/jquery.fancybox.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/jquery-ui.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/owl.carousel.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/jquery.jcarousellite.min.js', 'public/js/front.js')

    .js('resources/assets/js/libs/jquery.elevatezoom.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/popup.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/timecircles.min.js', 'public/js/front.js')
    .js('resources/assets/js/libs/wow.min.js', 'public/js/front.js')
    .js('resources/assets/js/theme.js', 'public/js/front.js')
    .styles([
        'resources/assets/css/libs/font-awesome.min.css',
        'resources/assets/css/libs/ionicons.min.css',
        'resources/assets/css/libs/bootstrap.min.css',
        'resources/assets/css/libs/bootstrap-theme.min.css',
        'resources/assets/css/libs/jquery.fancybox.min.css',
        'resources/assets/css/libs/jquery-ui.min.css',
        'resources/assets/css/libs/owl.carousel.min.css',
        'resources/assets/css/libs/owl.transitions.min.css',
        'resources/assets/css/libs/jquery.mCustomScrollbar.min.css',
        'resources/assets/css/libs/owl.theme.min.css',
        'resources/assets/css/libs/animate.min.css',
        'resources/assets/css/libs/hover.min.css',
        'resources/assets/css/theme.css',
        'resources/assets/css/responsive.css',
        'resources/assets/css/browser.css',
    ], 'public/css/front.css')

    .version();

const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);
mix.styles([
    'resources/css/sport.css',
], 'public/css/app_moonbase.css');
// mix.styles([
//     'resources/css/anime.css',
// ], 'public/css/anime_moonbase.css');

// mix.js([
//     'resources/js/index.js'
// ],
//     'public/js/admin_moonbase.js');
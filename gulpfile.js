// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var livereload = require('gulp-livereload');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./lib/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./lib/scss/*.scss', ['sass'])
    .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'js/plugins.js',
        'js/main.js'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(livereload());
});

/* Concatenate & Minify CSS
gulp.task('scripts-css', function() {
    return gulp.src([
        'css/main.css',
        'css/plugins.css',
        'css/style4.css'
        ])
        .pipe(concat('all-style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(rename('all-style.min.css'))
        .pipe(livereload());
}); */

// Watch Files For Changes
gulp.task('watch', function() {
    livereload({ start: true });
    livereload.listen({ reloadPage: './index.html' });
    livereload.listen({ reloadPage: './home.html' });
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('./lib/scss/*.scss', ['sass']);
    gulp.watch('./lib/jade/*.jade', ['templates']);
    gulp.watch('./lib/stylus/*.styl', ['stylus']);
});


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'serve', 'watch']);


// Jade Compiler
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  gulp.src('./lib/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))

    // SAVE OUTPUT FILE IN DIST FOLDER
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

//stylus
gulp.task('stylus', function () {
  gulp.src('./lib/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./lib/scss/*.scss", ['sass']);
    gulp.watch("./js/*.js", ['scripts']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./lib/stylus/*.styl", ['stylus']).on('change', browserSync.reload);
    
});



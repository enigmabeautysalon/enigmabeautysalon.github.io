// Include gulp
var gulp = require('gulp'); 


var gulp = require('gulp');
var browserSync = require('browser-sync').create();



// Default Task
gulp.task('default', ['serve', 'watch']);

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    
});



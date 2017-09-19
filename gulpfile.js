var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
    // listen for changes
    livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        script: './bin/www',
        ext: 'js'
//         ignore: ['./node_modules/**']
        
    }).on('restart', function(){
        gulp.src('./bin/www')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
})
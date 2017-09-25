var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
const eslint = require('gulp-eslint');



gulp.task('default', function() {
    livereload.listen();
    nodemon({
        script: './bin/www',
        ext: 'js'
        //         ignore: ['./node_modules/**']
    }).on('restart', function() {
        gulp.src('./bin/www')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
})



gulp.task('test-watch', function() {
    gulp.watch(['tests/**/*.js'], ['test']);
});

gulp.task('pre-test', function() {
    return gulp.src(['app/**/*.js'])
        .pipe(istanbul({ includeUntested: true }))
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['lint', 'pre-test'], function() {
    return gulp.src(['tests/**/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({thresholds: {global: 90}}));
});

// nyan
// list



gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**', '!coverage/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
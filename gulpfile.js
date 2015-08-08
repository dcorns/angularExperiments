/**
 * gulpfile
 * Created by dcorns on 8/5/15.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var karma = require('gulp-karma');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    port: '3000'
  });
});

gulp.task('browserify', function(){
  return browserify('app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('browserifyAngular', function(){
  return browserify(['test/controllerMain_test.js', 'test/anothercontroller_test.js'])
    .bundle()
    .pipe(source('testmain.js'))
    .pipe(gulp.dest('test'));
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.js', ['browserify']);
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('test/**/*_test.js', ['angularTest']);
});

gulp.task('sass', function(){
  return sass('sass/main.sass')
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('angularTest', ['browserifyAngular'], function(){
    return gulp.src(['test/testmain.js'])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
    //.on('error', function(err){
    //  throw err;
    //});
});

gulp.task('default', ['connect', 'watch']);
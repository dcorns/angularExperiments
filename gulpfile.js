/**
 * gulpfile
 * Created by dcorns on 8/5/15.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var glob = require('glob');
var webpack = require('gulp-webpack');
var karma = require('gulp-karma');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    port: '3000'
  });
});

gulp.task('webpack', function(){
  return gulp.src(glob.sync('app/**/*.js'))
    .pipe(webpack({
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('webpackTests', function(){
  return gulp.src(glob.sync('test/**/*_test.js'))
    .pipe(webpack({
      output: {
        filename: 'testmain.js'
      }
    }))
    .pipe(gulp.dest('test'));
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.js', ['webpack']);
  gulp.watch('sass/**/*.sass', ['sass']);
});

gulp.task('sass', function(){
  return sass(glob.sync('sass/**/*.sass'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('angularTest', ['webpackTests'], function(){
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
gulp.task('unitTests', ['webpackTests', 'angularTest']);
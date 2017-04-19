'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function() {
	gulp.src([
		'js/jquery.js',
		'js/sticky/jquery.sticky.js',
		'js/main.js'])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function(){
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.jsht'))
		.pipe(gulp.dest('js'));
});


gulp.task('compileSass', function(){
	gulp.src("scss/application.scss")
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('css'));
});

gulp.task("default", ["hello"], function() {
	console.log("This is the default task");
});
var gulp = require('gulp');

//var concat = require('gulp-concat');
var concat = require('gulp-concat-sourcemap');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var filesize = require('gulp-filesize');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var gzip = require('gulp-gzip');

var paths = {
	scripts: [
		'src/Site/MainBundle/Resources/js/*.js'
	],
	stylesheets: [
		'src/Site/MainBundle/Resources/less/custom/*.less'
	],
    css: [
        'src/Site/MainBundle/Resources/public/css/main.css'
    ]
}

gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(concat('scripts.js'))
		.pipe(filesize())
		.pipe(gulp.dest('src/Site/MainBundle/Resources/public/js'));
});

gulp.task('build', function() {
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('scripts.min.js'))
		//.pipe(gzip())
		.pipe(filesize())
		.pipe(gulp.dest('src/Site/MainBundle/Resources/public/js'));
});

gulp.task('stylesheets', function() {
	return gulp.src('src/Site/MainBundle/Resources/less/custom/main.less')
		.pipe(less({
			sourceMap: true,
			compress: true
		}))
		.pipe(concat('main.css'))
		.pipe(filesize())
		.pipe(gulp.dest('src/Site/MainBundle/Resources/public/css'));
});

gulp.task('css_concat', ['stylesheets'], function(){
   return gulp.src(paths.css)
       .pipe(concat('main.css'))
       .pipe(minifyCSS())
       //.pipe(gzip())
       .pipe(filesize())
       .pipe(gulp.dest('src/Site/MainBundle/Resources/public/css'));
});

gulp.task('images', function() {
	return gulp.src(paths.images)
		.pipe(gulp.dest('src/Site/MainBundle/Resources/public/css'));
});

gulp.task('lint', function() {
  gulp.src('src/Site/MainBundle/Resources/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['scripts', 'stylesheets', 'images']);

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.stylesheets, ['stylesheets','css_concat']);
});

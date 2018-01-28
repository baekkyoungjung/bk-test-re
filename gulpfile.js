var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('gulp-babel');
var elixir = require('laravel-elixir');
var source = require('vinyl-source-stream');
var run = require('run-sequence').use(gulp);
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
const reload = browserSync.reload;

var DIR = {
	RES : './resources',
	ASSETS : './resources/assets',
	PUBLIC : './public'
}

var SRC = {
	JS : DIR.ASSETS + '/js',
	SASS : DIR.ASSETS + '/sass',
	BLADE : DIR.RES + '/views'
};

var DST = {
	JS : DIR.PUBLIC + '/js',
	CSS : DIR.PUBLIC + '/css',
	VIEWS : DIR.PUBLIC +'/views',
	BUILD : DIR.PUBLIC + '/build'
};

gulp.task('build:dev', function() {
	run(
		'browserify',
		'sass',
		'watch'
	);
});

gulp.task('browserify', function(){
	return browserify([
		SRC.JS + '/app/bk-wedding.js',
		SRC.JS + '/utils/declare-function.js',
	])
	.transform(babelify)
	.bundle()
	.pipe(source('hahahahaha.js'))
	.pipe(gulp.dest('public/js'));
});

gulp.task('watch:js', function(){
	run ('browserify');
});

gulp.task('watch:css', function(){
	run ('sass');
});

gulp.task('sass', function () {
    gulp.src(SRC.SASS + '/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DST.CSS));
});

gulp.task('watch', function(){
	gulp.watch(SRC.JS + '/**/*.js', ['watch:js']).on('change', reload);
	gulp.watch(SRC.SASS + '/app.scss', ['watch:css']).on('change', reload);
});



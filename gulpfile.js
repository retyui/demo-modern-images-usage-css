console.log('process.env.NODE_ENV=',process.env.NODE_ENV);

var gulp = require('gulp');
var webp = require('gulp-webp');
var newer = require('gulp-newer');
var postcss = require('gulp-postcss');
const { resolve } = require('path');

var imagesDest = './public/assets/img/';

gulp.task('img:copy', function () {
	return gulp.src('./src/_img/**/*.*')
		.pipe(newer(imagesDest))
		.pipe(gulp.dest(imagesDest));
});

gulp.task('img:webp', function () {
	return gulp.src('./public/assets/img/*.{png,jpg,jpeg,gif}')
		.pipe(newer({
			dest:imagesDest,
			ext:'.webp'
		}))
		.pipe(webp())
		.pipe(gulp.dest(imagesDest));
});


var cssDest = './public/assets/css/';
gulp.task('css', function () {
	const processors = [
		require('webpcss').default,
		require('postcss-image-set-generator')({
			scales: [1, 1.5, 2, 3, 4], // your supported list devicePixelRatio
			suffix: '@x',
			resolutionType: 'x', // dpi || dppx || x

			loadPaths: [resolve(cssDest)]
		}),
		require('postcss-image-set-polyfill')
	]

	if(process.env.NODE_ENV === 'production'){
		processors.push(require("autoprefixer")())
		processors.push(require("css-mqpacker")())
		processors.push(require('postcss-csso')())
	}
	return gulp.src('./src/css/**/*.css')
		.pipe( postcss(processors) )
		.pipe( gulp.dest(cssDest) );
});
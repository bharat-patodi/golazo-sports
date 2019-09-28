const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const minifyCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');

// CSS Fixing

function cssFixing() {
    return gulp.src('styles.css').pipe(minifyCSS()).pipe(autoprefixer()).pipe(gulp.dest('src/styles'));
};

function automatedCSSFixing() {
    return gulp.watch('styles.css', cssFixing);
}
// JS Fixing

function jsFixing () {
    return gulp.src('app.js').pipe(eslint()).pipe(minifyJS()).pipe(gulp.dest('src/js'));
}

function automatedJSFixing () {
    return gulp.watch('app.js', jsFixing);
}

// Exports
exports.cssFixing = cssFixing;
exports.automatedCSSFixing = automatedCSSFixing;
exports.jsFixing = jsFixing;
exports.automatedJSFixing = automatedJSFixing;

// Default task
exports.default = gulp.parallel(automatedCSSFixing, automatedJSFixing);
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const minifyCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');

// CSS Fixing

function cssFixing() {
    return gulp.src('styles.css').pipe(minifyCSS()).pipe(autoprefixer()).pipe(gulp.dest('build'));
};

function automatedCSSFixing() {
    return gulp.watch('styles.css', cssFixing);
}
// JS Fixing


// Default task

// Exports
exports.cssFixing = cssFixing;
exports.automatedCSSFixing = automatedCSSFixing;

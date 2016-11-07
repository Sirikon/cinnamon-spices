'use strict';

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassLint = require('gulp-sass-lint');
var rename = require("gulp-rename");

var paths = require('../options/paths');
var sassLintRules = require('../options/sass-lint-rules');

module.exports = function(gulp) {

    // gulp.task('style:lint', function() {
    //     return gulp.src(paths.style.src_watch)
    //         .pipe(sassLint({ rules: sassLintRules }))
    //         .pipe(sassLint.format())
    //         .pipe(sassLint.failOnError());
    // });

    gulp.task('style:dev', function() {
        return gulp.src(paths.style.src)
            .pipe(sourcemaps.init())
            .pipe(sass()
                .on('error', sass.logError))
            .pipe(rename('style.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.style.dist));
    });

    gulp.task('style:release', function() {
        return gulp.src(paths.style.src)
            .pipe(sass({outputStyle: 'compressed'})
                .on('error', sass.logError))
            .pipe(rename('style.css'))
            .pipe(gulp.dest(paths.style.dist));
    });

};

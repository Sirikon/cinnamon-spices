'use strict';

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

const paths = require('../options/paths');

module.exports = (gulp) => {

    gulp.task('style:dev', () => {
        return gulp.src(paths.style.src)
            .pipe(sourcemaps.init())
            .pipe(sass()
                .on('error', sass.logError))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.style.dist));
    });

    gulp.task('style:release', () => {
        return gulp.src(paths.style.src)
            .pipe(sass({outputStyle: 'compressed'})
                .on('error', sass.logError))
            .pipe(gulp.dest(paths.style.dist));
    });

}

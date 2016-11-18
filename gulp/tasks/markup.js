'use strict';

var browserSync = require('browser-sync');

const paths = require('../options/paths');

module.exports = (gulp) => {
    gulp.task('markup', () => {
        return gulp.src(paths.markup.src)
            .pipe(gulp.dest(paths.markup.dist))
            .pipe(browserSync.reload({
                stream: true }));
    });
}

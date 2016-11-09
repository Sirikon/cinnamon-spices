'use strict';

const paths = require('../options/paths');

module.exports = (gulp) => {
    gulp.task('resources', () => {
        return gulp.src(paths.resources.src)
            .pipe(gulp.dest(paths.resources.dist));
    });
}

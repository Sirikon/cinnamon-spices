'use strict';

const paths = require('../options/paths');

module.exports = (gulp) => {
    gulp.task('markup', () => {
        return gulp.src(paths.markup.src)
            .pipe(gulp.dest(paths.markup.dist));
});
}

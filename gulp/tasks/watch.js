'use strict';

const paths = require('../options/paths');

module.exports = (gulp) => {
    gulp.task('watch', () => {
        gulp.watch(paths.style.src_watch, ['style:lint', 'style:dev']);
        gulp.watch(paths.markup.src, ['markup']);
        gulp.watch(paths.resources.src, ['resources']);
    });

    gulp.task('watch:ci', () => {
        gulp.watch(paths.style.src_watch, ['style:lint', 'style:ci']);
    });
}

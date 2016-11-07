'use strict';

var paths = require('../options/paths');

module.exports = function(gulp) {
    gulp.task('watch', function() {
        gulp.watch(paths.style.src_watch, ['style:dev']); //'style:lint',
        gulp.watch(paths.markup.src, ['markup']);
        gulp.watch(paths.resources.src, ['resources']);
    });
};

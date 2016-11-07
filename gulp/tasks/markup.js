'use strict';

var paths = require('../options/paths');

module.exports = function(gulp) {
    gulp.task('markup', function() {
        return gulp.src(paths.markup.src)
            .pipe(gulp.dest(paths.markup.dist));
    });
};

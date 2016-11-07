'use strict';

var paths = require('../options/paths');

module.exports = function(gulp) {
    gulp.task('resources', function() {
        return gulp.src(paths.resources.src)
            .pipe(gulp.dest(paths.resources.dist));
    });
};

'use strict';

var connect = require('gulp-connect');

var paths = require('../options/paths');

module.exports = function(gulp) {
    gulp.task('webserver', function() {
        connect.server({
            name: 'Dev WebServer',
            root: ['dist'],
            port: 8000
        });
    });
};

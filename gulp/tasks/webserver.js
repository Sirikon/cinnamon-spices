'use strict';

var connect = require('gulp-connect');

const paths = require('../options/paths');

module.exports = (gulp) => {
    gulp.task('webserver', () => {
        connect.server({
            name: 'Dev WebServer',
            root: ['dist'],
            port: 8000
        });
    });
}

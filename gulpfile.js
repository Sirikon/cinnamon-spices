'use strict';

const gulp = require('gulp');

require('./gulp/tasks/style')(gulp);
require('./gulp/tasks/markup')(gulp);
require('./gulp/tasks/watch')(gulp);
require('./gulp/tasks/webserver')(gulp);

gulp.task('default', ['webserver', 'style:dev', 'markup', 'watch']);
gulp.task('release', ['style:release', 'markup']);

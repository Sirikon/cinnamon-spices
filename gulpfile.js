'use strict';

const gulp = require('gulp');

require('./gulp/tasks/style')(gulp);
require('./gulp/tasks/markup')(gulp);
require('./gulp/tasks/resources')(gulp);
require('./gulp/tasks/watch')(gulp);
require('./gulp/tasks/browser-sync')(gulp);
// require('./gulp/tasks/webserver')(gulp);

// gulp.task('default', ['webserver', 'style:lint','style:dev', 'markup', 'resources', 'watch']);
gulp.task('default', ['browserSync', 'style:lint','style:dev', 'markup', 'resources', 'watch']);
gulp.task('release', ['style:release', 'markup', 'resources']);
gulp.task('ci', ['browserSync:ci', 'style:lint', 'style:ci', 'watch:ci']);

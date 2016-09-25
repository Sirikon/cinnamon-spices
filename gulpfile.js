'use strict';

const gulp = require('gulp');

require('./gulp/tasks/style')(gulp);
require('./gulp/tasks/markup')(gulp);
require('./gulp/tasks/watch')(gulp);

gulp.task('default', ['style:dev', 'markup', 'watch']);
gulp.task('release', ['style:release', 'markup']);

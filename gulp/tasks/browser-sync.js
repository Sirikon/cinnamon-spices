'use strict';

var browserSync = require('browser-sync');

const paths = require('../options/paths');

module.exports = (gulp) => {

  gulp.task('browserSync', () => {
    browserSync.init({
      server: {
        baseDir: 'dist/',
        index: 'index.html',
      },
      port: 8000,
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: false
      }
    })
  });

}

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

  gulp.task('browserSync:ci', () => {
    browserSync.init({
      proxy: '192.168.2.2',
      port: 8000,
      ghostMode: false
    })
  });

}

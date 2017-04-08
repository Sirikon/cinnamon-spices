'use strict';

module.exports = {
    style: {
        src: 'src/style/main.scss',
        src_watch: 'src/style/**/*.scss',
        dist: 'dist/'
    },
    markup: {
        src: 'src/*.html',
        dist: 'dist/'
    },
    resources: {
        src: 'src/resources/**/*',
        dist: 'dist/resources/'
    },
    ci: {
        dist: '../'
    }
}

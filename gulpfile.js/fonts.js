const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const browsersync = require('browser-sync');

const path = require('../config');

const fonts = () => {
  return gulp.src(path.src.fonts, { base: path.base.fonts })
    .pipe(gp.newer(path.build.fonts))
    .pipe(gulp.dest(path.build.fonts))
    .pipe(browsersync.stream());
};

module.exports.fonts = fonts;

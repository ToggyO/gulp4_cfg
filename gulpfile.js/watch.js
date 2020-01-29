const gulp = require('gulp');
const { pugCompiler } = require('./pug');
const { sassDevCompiler } = require('./sass');
const { jsDevCompiler } = require('./scripts');
const { imageDevCompiler } = require('./images');
const { fonts } = require('./fonts');
const { buildDev } = require('./build');
const { browserSync } = require('./browserSync');

const path = require('../config');

function watchFiles() {
  gulp.watch([path.watch.pug], pugCompiler);
  gulp.watch([path.watch.sass], sassDevCompiler);
  gulp.watch([path.watch.js], jsDevCompiler);
  gulp.watch([path.watch.img], imageDevCompiler);
  gulp.watch([path.watch.fonts], fonts);
}

const watch = gulp.parallel(buildDev, watchFiles, browserSync);

module.exports.watch = watch;

// function watchFiles() {
//   $.gulpfile.js.watch([$.path.watch.pug], $.tasks.pugCompiler);
//   $.gulpfile.js.watch([$.path.watch.sass], $.tasks.sassCompiler);
// }
//
// const watch = $.gulpfile.js.parallel($.tasks.build, watchFiles, $.tasks.browserSync);
//
// module.exports.watch = watch;

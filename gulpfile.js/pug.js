const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const browsersync = require('browser-sync');

const path = require('../config');

const pugCompiler = () => {
  return gulp.src(path.src.pug, { base: path.base.pug })
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    .pipe(gp.pug({
      pretty: true,
    }))
    .pipe(gulp.dest(path.build.pug))
    .pipe(gp.filesize())
    .pipe(browsersync.stream());
};

module.exports.pugCompiler = pugCompiler;

// const pugCompiler = () => {
//   return $.gulpfile.js.src($.path.src.pug, { base: $.path.base.pug })
//     .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
//     .pipe($.gp.pug({
//       pretty: true,
//     }))
//     .pipe($.gulpfile.js.dest($.path.build.pug))
//     .pipe($.browsersync.stream());
// };
//
// module.exports.pugCompiler = pugCompiler;

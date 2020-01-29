const { src, dest } = require('gulp');
const gp = require('gulp-load-plugins')();
const browsersync = require('browser-sync');

const path = require('../config');

const sassDevCompiler = () => {
  return src(path.src.sass, { base: path.base.styles })
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass({
      errorLogToConsole: true,
    }))
    .pipe(gp.autoprefixer({
      cascade: false,
    }))
    .pipe(gp.rename({
      basename: 'style',
      suffix: '.min',
      extname: '.css',
    }))
    .pipe(gp.sourcemaps.write('./'))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
};

const sassProdCompiler = () => {
  return src(path.src.sass, { base: path.base.styles })
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    .pipe(gp.sass({
      errorLogToConsole: true,
    }))
    .pipe(gp.autoprefixer({
      cascade: false,
    }))
    .pipe(gp.rename({
      basename: 'style',
      suffix: '.min',
      extname: '.css',
    }))
    .pipe(gp.csso())
    .pipe(dest(path.build.css))
    .pipe(gp.filesize())
};

module.exports.sassDevCompiler = sassDevCompiler;
module.exports.sassProdCompiler = sassProdCompiler;

// const sass = () => {
//   return $.gulpfile.js.src($.path.src.sass, { base: $.path.base.styles })
//     .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
//     .pipe($.gp.sourcemaps.init())
//     .pipe($.gp.sass({
//       errorLogToConsole: true,
//     }))
//     // .on('error', sass.logError)
//     .pipe($.gp.autoprefixer({
//       cascade: false,
//     }))
//     .pipe($.gp.rename({
//       basename: 'style',
//       suffix: '.min',
//       extname: '.css',
//     }))
//     .pipe($.gp.csso())
//     .pipe($.gp.sourcemaps.write('./'))
//     .pipe($.gulpfile.js.dest($.path.build.css))
//     .pipe($.browsersync.stream());
// };
//
// module.exports.sass = sass;


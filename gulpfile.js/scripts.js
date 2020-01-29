const { src, dest } = require('gulp');
const gp = require('gulp-load-plugins')();
const browsersync = require('browser-sync');

const path = require('../config');

const jsDevCompiler = () => {
  return src(path.src.js, { base: path.base.js })
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
};

const jsProdCompiler = () => {
  return src(path.src.js, { base: path.base.js })
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    // .pipe(gp.babel())
    .pipe(gp.uglify())
    .pipe(dest(path.build.js))
    .pipe(gp.filesize())
};

const jsLibsDevCompiler = () => {
  return src([path.libs.jquery, path.libs.slick])
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    .pipe(gp.concat('libs.min.js'))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
};

const jsLibsProdCompiler = () => {
  return src([path.libs.jquery, path.libs.slick])
    .pipe(gp.plumber({ errorHandler: gp.notify.onError("Error: <%= error.message %>") }))
    .pipe(gp.concat('libs.min.js'))
    .pipe(gp.uglify())
    .pipe(dest(path.build.js))
    .pipe(gp.filesize())
};

module.exports.jsDevCompiler = jsDevCompiler;
module.exports.jsProdCompiler = jsProdCompiler;
module.exports.jsLibsDevCompiler = jsLibsDevCompiler;
module.exports.jsLibsProdCompiler = jsLibsProdCompiler;




const gulp = require('gulp');
const { pugCompiler } = require('./pug');
const { sassDevCompiler, sassProdCompiler } = require('./sass');
const { imageDevCompiler ,imageProdCompiler } = require('./images');
const { jsDevCompiler, jsProdCompiler, jsLibsDevCompiler, jsLibsProdCompiler } = require('./scripts');
const { fonts } = require('./fonts');
const del = require('del');

const path = require('../config');

const clean = () => del(path.clean);

const buildDev = gulp.series(
  clean,
  gulp.parallel(
    pugCompiler,
    sassDevCompiler,
    jsDevCompiler,
    jsLibsDevCompiler,
    imageDevCompiler,
    fonts,
));

const buildProd = gulp.series(
  clean,
  gulp.parallel(
    pugCompiler,
    sassProdCompiler,
    jsProdCompiler,
    jsLibsProdCompiler,
    imageProdCompiler,
    fonts,
));

module.exports.clean = clean;
module.exports.buildDev = buildDev;
module.exports.buildProd = buildProd;


// const clean = () => $.del($.path.clean);
//
// const build = $.gulpfile.js.series(clean, $.gulpfile.js.parallel($.pugCompiler, $.sassCompiler));
//
// module.exports.clean = clean;
// module.exports.build = build;

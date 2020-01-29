const { pugCompiler } = require('./pug');
const { sassDevCompiler, sassProdCompiler } = require('./sass');
const { jsDevCompiler, jsProdCompiler, jsLibsProdCompiler, jsLibsDevCompiler } = require('./scripts');
const { imageProdCompiler, imageDevCompiler } = require('./images');
const { fonts } = require('./fonts');
const { buildDev ,buildProd, clean } = require('./build');
const { watch } = require('./watch');

const gp = require('gulp-load-plugins')();
console.log(gp);

module.exports.pugCompiler = pugCompiler;
module.exports.sassDevCompiler = sassDevCompiler;
module.exports.sassProdCompiler = sassProdCompiler;
module.exports.jsDevCompiler = jsDevCompiler;
module.exports.jsProdCompiler = jsProdCompiler;
module.exports.jsLibsDevCompiler = jsLibsDevCompiler;
module.exports.jsLibsProdCompiler = jsLibsProdCompiler;
module.exports.imageProdCompiler = imageProdCompiler;
module.exports.imageDevCompiler = imageDevCompiler;
module.exports.fonts = fonts;
module.exports.clean = clean;
module.exports.buildDev = buildDev;
module.exports.buildProd = buildProd;
module.exports.watch = watch;
module.exports.default = watch;

// TODO add tasks: html, svg, mixins






// global.$ = {
//   gulpfile.js: require('gulpfile.js'),
//   gp: require('gulpfile.js-load-plugins')(),
//   del: require("del"),
//   browsersync: require('browser-sync'),
//   path: require('../config'),
//   tasks: {
//     pugCompiler: require('./pugCompiler'),
//     sassCompiler: require('./sassCompiler'),
//     browserSync: require('./browserSync'),
//     clean: require('./build'),
//     build: require('./build'),
//     watch: require('./watch'),
//   },
// };
//
// function watchFiles() {
//   $.gulpfile.js.watch([$.path.watch.pug], $.tasks.pugCompiler);
//   $.gulpfile.js.watch([$.path.watch.sass], $.tasks.sassCompiler);
// }
//
// const clean = () => $.del($.path.clean);
//
// const build = $.gulpfile.js.series(clean, $.gulpfile.js.parallel($.tasks.pugCompiler, $.tasks.sassCompiler));
// const watch = $.gulpfile.js.parallel($.tasks.build, watchFiles, $.tasks.browserSync);
//
// module.exports.clean = clean;
// module.exports.build = build;
// module.exports.watch = watch;
// $.gulpfile.js.task('default', $.tasks.watch);

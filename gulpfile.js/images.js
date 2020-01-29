const { src, dest } = require('gulp');
const gp = require('gulp-load-plugins')();
const browsersync = require('browser-sync');

const path = require('../config');

// This task only used by "watch" task to increase performance
const imageDevCompiler = () => {
  return src(path.src.img)
    .pipe(gp.newer(path.build.img))
    .pipe(dest(path.build.img))
};

// This task minify images only when "build" task is used
const imageProdCompiler = () => {
  return src(path.src.img)
    .pipe(gp.imagemin([
      gp.imagemin.gifsicle({ interlaced: true }),
      gp.imagemin.mozjpeg({ quality: 75, progressive: true }),
      gp.imagemin.optipng({ optimizationLevel: 5 }),
      gp.imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false },
        ]
      })
    ]))
    .pipe(dest(path.build.img))
    .pipe(gp.filesize());
};

module.exports.imageProdCompiler = imageProdCompiler;
module.exports.imageDevCompiler = imageDevCompiler;

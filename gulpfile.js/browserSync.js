const browsersync = require('browser-sync');

function browserSync(done) {
 browsersync.init({
    server: {
      baseDir: 'build/',
    },
    port: 3000,
  });
  done();
}

function browserReload(done) {
  browsersync.reload();
  done();
}

module.exports.browserSync = browserSync;
module.exports.browserReload = browserReload;

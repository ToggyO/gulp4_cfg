const path = {
  base: {
    styles: './src/styles/',
    pug: './src/pug/pages/',
    js: './src/js/',
    img: './src/images/',
    fonts: 'src/fonts/',
  },
  build: {
    html: 'build/',
    css: 'build/assets/css/',
    pug: 'build/',
    js: 'build/assets/js/',
    img: 'build/assets/images/',
    fonts: 'build/assets/fonts/',
  },
  src: {
    html: './*.html',
    sass: 'src/styles/index.sass',
    pug: 'src/pug/pages/*.pug',
    js: 'src/js/main.js',
    img: 'src/images/**/*.{png,jpg,gif}',
    fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2}',
  },
  watch: {
    html: './*.html',
    sass: 'src/styles/**/*.sass',
    pug: 'src/pug/**/*.pug',
    js: 'src/js/**/*.js',
    img: 'src/images/**/*.{png,jpg,gif}',
    fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2}',
  },
  clean: './build/',
  libs: {
    jquery: './node_modules/jquery/dist/jquery.min.js',
    slick: './node_modules/slick-carousel/slick/slick.min.js',
  }
};

module.exports = path;


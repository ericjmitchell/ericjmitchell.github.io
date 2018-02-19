'use strict'

var util = require('util');

module.exports = {
  src: './src/assets/desk/**/*.{png}',
  destImage: './src/assets/desksprite.png',
  destCSS: './src/css/desksprite.css',
  imgPath: '/src/assets/desksprite.png',
  padding: 2,
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name);
    }
  }
};
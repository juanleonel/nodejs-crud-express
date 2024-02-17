const { sep } = require('path')
const path = require('path');

const currentDir = path.join(__dirname, '..')
const config = {
  port: process.env.PORT || 3000,
  dir: {
    root: currentDir,
    static: currentDir + '/static' + sep,
    views: currentDir + '/views' + sep
  }
}


module.exports = config

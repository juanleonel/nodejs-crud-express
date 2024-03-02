const { sep } = require('path')
const path = require('path');

const currentDir = path.join(__dirname, '..')
const config = {
  port: process.env.PORT || 3000,
  dir: {
    root: currentDir,
    static: currentDir + '/static' + sep,
    views: currentDir + '/views' + sep
  },
  db: {
    host: 'localhost',
    port: 3306,
    database: 'crudexpressdb',
    user: 'juanleo1',
    password: 'JuanLeonelAlbores$2023@',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
}

module.exports = config

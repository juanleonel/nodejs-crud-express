module.exports = class DataBase {
  constructor(config) {
    this._config = config
    this._connection = require('mysql2/promise')
  }

  getConnection() {
    const pool = this._connection.createPool(this._config)
    console.log('connected!');
    return pool
  }
}

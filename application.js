const express = require('express')

const userRoute = require('./routes/user.routes')
const bodyParser = require('body-parser')

class Application {
  constructor(config) {
    this._config = config
    this._port = config.port
    this._app = express()
  }

  init() {
    this._app.set('view engine', 'hbs')
    this._app.set('views', this._config.dir.views)
    this._app.use(bodyParser.json())
    this._app.use(bodyParser.urlencoded({ extended: true }))

    this._app.use(userRoute)

    this._app.use((req, res) => {
      return res.status(404).send('Not found')
    })

    return this
  }

  run() {
    this._app.listen(this._port, () => {
      console.log('Server running in port: ' + this._port)
    })
  }
}

module.exports = {
  Application
}

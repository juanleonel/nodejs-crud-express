const express = require('express')

const userRoute = require('./routes/user.routes')

class Application {
  constructor(config) {
    this._config = config
    this._port = config.port
    this._app = express()
  }

  init() {
    this._app.set('view engine', 'hbs')
    this._app.set('views', this._config.dir.views)
    this._app.use(express.urlencoded({ extended: true }))

    // this._app.get('/', (req, res) => {
    //   return res.render('index', { title: 'Hello again!' })
    // })

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

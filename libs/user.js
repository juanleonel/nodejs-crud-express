const upload = require('./upload');
const config = require('../config')
const DataBase = require('../config/database')

const _db = new DataBase(config.db);

async function saveUser(req, res) {
  const data = req.body
  const result = await upload(req, config.dir.static)

  await _db.getConnection()

  return res.render('index', { title: 'Users' })
}

async function showUser(req, res) {
  const data = req.body

  return res.render('index', { title: 'Users' })
}

async function editUser(req, res) {
  const data = req.body

  return res.render('index', { title: 'Users' })
}

async function deleteUser(req, res) {
  
  return res.render('index', { title: 'Users' })
}

module.exports = {
  deleteUser,
  editUser,
  saveUser,
  showUser
}

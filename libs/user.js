const upload = require('./upload')
const config = require('../config')
const sequelize = require('../config/sequelize-connection')
const employeModel = require('../config/models/employe.model')


async function saveUser(req, res, next) {
  try {
    const data = req.body
    console.log(data);
    await upload(req, config.dir.static)
    const employe = await employeModel.create({
      name: data.name,
      last_name: data.last_name,
      job: data.job,
      created_at: new Date(),
      like_node: 1
    })

    return res.render('index', { title: 'Users' })
  } catch (error) {
    throw Error(error.message)
  }
}

async function showUser(req, res) {
  try {
    const data = req.body
    await sequelize.authenticate();

    return res.render('index', { title: 'Users' })
  } catch (error) {
    throw Error(error.message)
  }
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

const express = require('express')
const router = express.Router()
const { saveUser, showUser } = require('../libs/user')

router.get('/user', showUser)
router.post('/user/save', saveUser)

module.exports = router

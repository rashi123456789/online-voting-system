const express = require('express')
const router = express.Router() 
const { authenticateUsers } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const citizenController = require('../app/controllers/citizenController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/accounts', authenticateUsers, usersController.account)

router.get('/citizens',authenticateUsers,citizenController.list)
router.post('/citizens',authenticateUsers,citizenController.create)
router.get('/citizens/:id',authenticateUsers,citizenController.show)
router.put('/citizens/:id',authenticateUsers,citizenController.update)
router.delete('/citizens/:id',authenticateUsers,citizenController.destroy)
module.exports = router
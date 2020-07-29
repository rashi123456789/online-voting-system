const express = require('express')
const router = express.Router() 
const { authenticateUsers } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const citizenController = require('../app/controllers/citizenController')
const partyController = require ('../app/controllers/partyController')
const upload = require('../app/middlewares/multer')
const candidateController=require ('../app/controllers/candidateContoller')
const castvoteController=require('../app/controllers/castvoteController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/accounts', authenticateUsers, usersController.account)

router.get('/citizens',authenticateUsers,citizenController.list)
router.post('/citizens',authenticateUsers,citizenController.create)
router.get('/citizens/:id',authenticateUsers,citizenController.show)
router.put('/citizens/:id',authenticateUsers,citizenController.update)
router.delete('/citizens/:id',authenticateUsers,citizenController.destroy)

router.get('/partys',authenticateUsers,partyController.list)
router.post('/partys',authenticateUsers,upload.single('filename'),partyController.create)
router.get('/partys/:id',authenticateUsers,partyController.show)
router.put('/partys/:id',authenticateUsers,partyController.update)
router.delete('/partys/:id',authenticateUsers,partyController.destroy)

router.get('/castvotes',authenticateUsers,castvoteController.list)
router.post('/castvotes',authenticateUsers,castvoteController.create)
router.get('/castvotes/:id',authenticateUsers,castvoteController.show)



router.get('/candidates',authenticateUsers,candidateController.list)
router.post('/candidates',authenticateUsers,candidateController.create)
router.get('/candidates/:id',authenticateUsers,candidateController.show)
router.put('/candidates/:id',authenticateUsers,candidateController.update)
router.delete('/candidates/:id',authenticateUsers,candidateController.destroy)

module.exports = router
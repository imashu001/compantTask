const express = require("express");
const router = express.Router();
const {addUser, deleteUser, editUser, fetchUser} = require('../controller/userController')
const checkAuth = require('../middleware/authMiddleware')

router.post('/addUser', addUser)
router.post('/deleteUser', deleteUser)
router.post('/editUser', editUser)
router.get('/fetchUsers', fetchUser)

module.exports = router;
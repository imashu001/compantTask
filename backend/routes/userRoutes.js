const express = require("express");
const router = express.Router();
const {addUser, deleteUser, editUser, fetchUser} = require('../controller/userController')
const checkAuth = require('../middleware/authMiddleware')

router.post('/addUser', checkAuth, addUser)
router.post('/deleteUser',checkAuth, deleteUser)
router.post('/editUser',checkAuth, editUser)
router.get('/fetchUsers', fetchUser)

module.exports = router;


const express = require('express')

const router = express.Router();

const userController = require('../controllers/userControllers');


// router.post('/create_users',testController.createTest);
// router.get('/view_users',testController.getTest);



router.post('/register', userController.registeruser);
router.post('/login', userController.loginUser);


module.exports = router;
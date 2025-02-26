
const express = require('express');
const router = express.Router();
const AdminControllers = require('../controllers/AdminControllers');
const { isAdmin } = require('../middleware/authMiddleware');

// Admin routes
router.post('/courses', isAdmin, AdminControllers.createCourse); 
router.get('/users', isAdmin, AdminControllers.getAllUsers); 
router.delete('/users/:userId', isAdmin, AdminControllers.deleteUser); 
router.put('/users/:userId/role', isAdmin, AdminControllers.updateUserRole); 

module.exports = router;
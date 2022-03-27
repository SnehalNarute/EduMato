const express = require('express')
const router = express.Router()

const { protect, admin } = require('../middlewares/authMiddleware')

const {
	registerUser,
	authUser,
	getUserProfile,
	updateUserProfile,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controllers/userControllers')

// =================================================================

// Registration Route --(POST)
router.route('/').post(registerUser)
// Login Route --(POST)
router.route('/login').post(authUser)

// =================================================================

// User Profile --(Get and Update)
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

// =================================================================

// GET User by Id, DELETE THAT USER, UPDATE THAT USER
router
	.route('/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser)

module.exports = router

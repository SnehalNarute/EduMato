const express = require('express')
const router = express.Router()

const { protect, admin } = require('../middlewares/authMiddleware')

const {
	createMealtype,
	readMealtype,
	updateMealtype,
	deleteMealtype,
	listMealtype,
} = require('../controllers/mealtypeController')

// ========================================================================

// Create Mealtype
router.route('/create').post(protect, admin, createMealtype)

// Get all Mealtypes
router.route('/').get(listMealtype)

// Get Single Mealtype
router.route('/:slug').get(readMealtype)

// Update Mealtypes
router.route('/:slug').put(protect, admin, updateMealtype)

// Delete Mealtypes
router.route('/:slug').delete(protect, admin, deleteMealtype)

// ========================================================================

module.exports = router

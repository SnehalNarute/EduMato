const express = require('express')
const router = express.Router()

const { protect, admin } = require('../middlewares/authMiddleware')

const {
	createRestaurant,
	listRestaurant,
	readRestaurant,
	updateRestaurant,
	deleteRestaurant,
} = require('../controllers/restaurantController')

// ========================================================================

// Create Restaurant
router.route('/').post(protect, admin, createRestaurant)

// Get all Restaurants
router.route('/restaurants').get(listRestaurant)
router.route('/:slug').get(protect, readRestaurant)

// Update Restaurants
router.route('/:slug').put(protect, admin, updateRestaurant)

// Delete Restaurants
router.route('/:slug').delete(protect, admin, deleteRestaurant)

// ========================================================================

module.exports = router

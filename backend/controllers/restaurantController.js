const asyncHandler = require('express-async-handler')
const Restaurant = require('../models/restaurantModel')
const slugify = require('slugify')

const createRestaurant = asyncHandler(async (req, res) => {
	try {
		console.log(req.body)
		req.body.slug = slugify(req.body.name)
		const newRestaurant = await new Restaurant(req.body).save()
		res.status(201).json(newRestaurant)
	} catch (error) {
		console.log(error)
		res.status(400).json('Create Restaurant Failed!')
	}
})

const listRestaurant = asyncHandler(async (req, res) => {
	const getAllRestaurants = await Restaurant.find({}).sort({ createdAt: -1 })
	res.status(200).json(getAllRestaurants)
})

const readRestaurant = asyncHandler(async (req, res) => {
	const getSingleRestaurant = await Restaurant.findOne({
		slug: req.params.slug,
	})
	if (getSingleRestaurant) {
		res.status(200).json(getSingleRestaurant)
	} else {
		res.status(400).send(`No restaurant named ${req.params.slug} found`)
	}
})

const updateRestaurant = asyncHandler(async (req, res) => {
	const {
		name,
		pic,
		mealtype,
		location,
		city,
		cuisines,
		costfortwo,
		menu,
		phone,
	} = req.body
	try {
		const updatedMealtype = await Mealtype.findOneAndUpdate(
			{ slug: req.params.slug },
			{
				name,
				pic,
				mealtype,
				location,
				city,
				cuisines,
				costfortwo,
				menu,
				phone,
				slug: slugify(name),
			},
			{ new: true }
		)
		res.status(200).json(updatedMealtype)
	} catch (error) {
		res.status(400).send(`Mealtype update failed!`)
	}
})
const deleteRestaurant = asyncHandler(async (req, res) => {})

// module.exports = {
// 	createRestaurant,
// }
module.exports = {
	createRestaurant,
	listRestaurant,
	readRestaurant,
	updateRestaurant,
	deleteRestaurant,
}

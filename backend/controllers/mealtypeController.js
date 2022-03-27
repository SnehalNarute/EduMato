const asyncHandler = require('express-async-handler')
const Mealtype = require('../models/mealtypeModel')
const slugify = require('slugify')

const createMealtype = asyncHandler(async (req, res) => {
	try {
		// Data from frontend
		const { name, description } = req.body
		const createMealtype = await Mealtype.create({
			name,
			description,
			slug: slugify(name),
		})
		res.status(201).json(createMealtype)
	} catch (error) {
		res.status(400).send('Create mealtype failed!')
	}
})

const listMealtype = asyncHandler(async (req, res) => {
	const getAllMealtypes = await Mealtype.find({}).sort({ createdAt: -1 })
	res.status(200).json(getAllMealtypes)
})

const readMealtype = asyncHandler(async (req, res) => {
	const getSingleMealtype = await Mealtype.findOne({ slug: req.params.slug })
	if (getSingleMealtype) {
		res.status(200).json(getSingleMealtype)
	} else {
		res.status(400).send(
			`No restaurants found for ${req.params.slug} mealtype`
		)
	}
})

const updateMealtype = asyncHandler(async (req, res) => {
	const { name, description } = req.body // Lunch & description changed to other ones
	try {
		const updatedMealtype = await Mealtype.findOneAndUpdate(
			{ slug: req.params.slug },
			{ name, description, slug: slugify(name) },
			{ new: true }
		)
		res.status(200).json(updatedMealtype)
	} catch (error) {
		res.status(400).send(`Mealtype update failed!`)
	}
})

const deleteMealtype = asyncHandler(async (req, res) => {
	try {
		const deleted = await Mealtype.findOneAndDelete({
			slug: req.params.slug,
		})
		res.status(200).send(
			`You have deleted the Mealtype named ${req.params.slug}`
		)
	} catch (error) {
		res.status(400).send(`Category named ${req.params.slug} doesn't exist!`)
	}
})

module.exports = {
	createMealtype,
	listMealtype,
	readMealtype,
	updateMealtype,
	deleteMealtype,
}

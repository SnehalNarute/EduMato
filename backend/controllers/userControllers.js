const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

// ========================================================================

// Registeration Logic => POST Request
const registerUser = asyncHandler(async (req, res) => {
	const { firstname, lastname, email, password, isAdmin } = req.body

	// Check if user exists by using email,
	// If exists then only send some message("User already registered etc.") to them
	// else save data to database

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400)
		throw new Error('User already exists!')
	}

	const user = await User.create({
		firstname,
		lastname,
		email,
		password,
		isAdmin,
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Error Occured!')
	}
})
// ======================================================================

// Login Logic => POST Request
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	// It will check if User has registered/User Exists in database
	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		res.status(200).json({
			_id: user._id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid Email or Password!')
	}
})
// ======================================================================

// Get User Profile -- Every User(Including Admin is able to see this screen)
// get profile by Id()
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})
// ========================================================================

// Update User Profile(POST REQUEST) -- (Admin Access)
// Logged In User
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		user.firstname = req.body.firstname || user.firstname
		user.lastname = req.body.lastname || user.lastname
		user.email = req.body.email || user.email

		if (req.body.password) {
			user.password = req.body.password
		}

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			firstname: updatedUser.firstname,
			lastname: updatedUser.lastname,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser._id),
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})
// ======================================================================

// Get All Users -- (Admin Access)

const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({})
	res.json(users)
})
// ======================================================================

// Delete User -- (Admin Access)
const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id)

	if (user) {
		await user.remove()
		res.json({ message: 'User removed' })
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})
// ======================================================================

// Get Single User Details --(Admin Access)

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select('-password')

	if (user) {
		res.json({ user })
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})
// ======================================================================

// Update Single User Details --(Admin Access)

const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id)

	if (user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email
		user.isAdmin = req.body.isAdmin

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})
// ===================================================================

module.exports = {
	registerUser,
	authUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
}

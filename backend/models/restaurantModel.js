const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const menuSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		pic: {
			type: String,
			required: true,
			default:
				'https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg',
		},
		price: {
			type: Number,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		sold: {
			type: Number,
			default: 0,
			required: true,
		},
		shipping: {
			type: String,
			enum: ['Yes', 'No'],
			required: true,
		},
	},
	{ timestamps: true }
)

const restaurantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'The Restaurant must have a name'],
			unique: true,
			trim: true,
			minlength: [
				4,
				'the Restaurant name should be of minimum 4 characters long',
			],
			maxlength: [
				40,
				'the Restaurant name should be of maximum 4 characters long',
			],
		},
		slug: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
			index: true,
		},
		pic: {
			type: String,
			required: true,
			default:
				'https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg',
		},
		// mealtype: {
		// 	type: ObjectId,
		// 	ref: 'Mealtype',
		// 	required: true,
		// },

		location: {
			// address
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		cuisines: {
			type: String,
			enum: [
				'North Indian',
				'South Indian',
				'Chinese',
				'Fast Food',
				'Street Food',
			],
			required: true,
		},
		costfortwo: {
			type: Number,
			required: [true, 'The cost should be specified'],
		},
		phone: {
			type: String,
			required: true,
		},
		menu: [menuSchema],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Restaurant', restaurantSchema)
// search by restaurant name
// search by location: address

const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

// User Schema
const userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

// middleware => it needs to encrypt(hash) password before saving to database
// and then move to next part
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const salt = await bcryptjs.genSalt(10)
	this.password = await bcryptjs.hash(this.password, salt)
})

// This will be used while logging in
// to check whether the entered password is same as registered-one
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcryptjs.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User

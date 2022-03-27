const jwt = require('jsonwebtoken')

// jwt will take the USER ID and CONVERT IT INTO A ENCRYPTED TOKEN
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	})
}

module.exports = generateToken

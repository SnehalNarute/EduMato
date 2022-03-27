//
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')
const restaurantRoutes = require('./routes/restaurantRoutes')
const mealtypeRoutes = require('./routes/mealtypeRoutes')

const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

// configure dotenv
const app = express()
dotenv.config()

// Mongodb connected
require('./connection')

// Middlewares
app.use(cors())
app.use(express.json())

// Default Route
// app.get('/', (req, res) => res.send('Hello World!'))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/restaurant', restaurantRoutes)
app.use('/api/mealtype', mealtypeRoutes)

app.use(notFound)
app.use(errorHandler)

// Listening on port
PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`))

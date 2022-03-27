import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import HomeScreen from './container/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RestaurantScreen from './container/RestaurantScreen/RestaurantScreen'
import RestDetailScreen from './container/RestDetailScreen/RestDetailScreen'
import LoginScreen from './container/LoginScreen/LoginScreen'
import SignUp from './container/Signup/Signup'
import CartScreen from './container/CartScreen/CartScreen'
import CheckOut from './container/CheckOut/CheckOut'
import ProfileScreen from './container/ProfileScreen/ProfileScreen'
import CreateMealtype from './container/Admin/CreateMealtype'
import ListMealtypes from './container/Admin/ListMealtypes'
import UpdateMealtype from './container/Admin/UpdateMealtype'
import CreateRestaurant from './container/Admin/CreateRestaurant'
import ListRestaurants from './container/Admin/ListRestaurants'
import UpdateRestaurant from './container/Admin/UpdateRestaurant'

const theme = createTheme({
	palette: {
		primary: {
			main: '#ce0505',
		},
	},
})

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route path='/' element={<HomeScreen />} exact />
						<Route
							path='/mealtype/:id'
							element={<RestaurantScreen />}
						/>
						<Route
							path='/restaurant/:id'
							element={<RestDetailScreen />}
						/>
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/register' element={<SignUp />} />
						<Route path='/profile' element={<ProfileScreen />} />
						<Route path='/cart' element={<CartScreen />} />
						<Route path='/checkout' element={<CheckOut />} />
						<Route
							path='/admin/mealtype/create'
							element={<CreateMealtype />}
						/>
						<Route
							path='/admin/mealtype'
							element={<ListMealtypes />}
						/>
						<Route
							path='/admin/mealtype/:slug'
							element={<UpdateMealtype />}
						/>
						<Route
							path='/admin/restaurant/create'
							element={<CreateRestaurant />}
						/>
						<Route
							path='/admin/restaurant'
							element={<ListRestaurants />}
						/>
						<Route
							path='/admin/restaurant/:slug'
							element={<UpdateRestaurant />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	)
}

export default App

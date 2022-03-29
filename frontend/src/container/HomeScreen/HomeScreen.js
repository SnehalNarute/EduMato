import React from 'react'
import { Container } from 'react-bootstrap'
import MealGrid from '../../components/MealGrid/MealGrid'
import './HomeScreen.css'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
	// useEffect(() => {
	// 	const userInfo = localStorage.getItem("userInfo")

	// 	if(userInfo){
	// 		history.push("/login")
	// 	}
	// }, [history]);
	return (
		<>
			<div className='home_top_container'>
				<div className='home-navbar'>
					<Link to='/login' className='login'>
						Login
					</Link>
					<Link to='/register'>
						<button>Create an account</button>
					</Link>
				</div>
				<div className='home-logo'>
					<div className='logo'>
						<Link to='/'>e!</Link>
					</div>
				</div>
				<h1 className='home-h1'>
					Find the best restaurants, cafés, and bars
				</h1>
				<div className='home-dropdown'>
					<input
						type='text'
						placeholder='Please type a location'
						name=''
						id=''
						className='home_input1'
					/>
					<div className='home-dropdown-input'>
						<input
							type='search'
							placeholder='Search for restaurants'
							name=''
							id=''
							className='home_input2'
						/>
					</div>
				</div>
			</div>
			<Container className='home-bottom-container'>
				<h3>Quick Searches</h3>
				<div className='home-mealtype-grid'>
					<MealGrid />
				</div>
			</Container>
		</>
	)
}
//
export default HomeScreen

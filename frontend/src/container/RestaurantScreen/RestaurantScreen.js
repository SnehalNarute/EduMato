import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Container } from 'react-bootstrap'
import './RestaurantScreen.css'
import RestaurantGrid from '../../components/RestaurantGrid/RestaurantGrid'

const RestaurantScreen = () => {
	return (
		<>
			<Header />
			<Container>
				<h2
					style={{
						margin: '2rem 0 1.8rem 0',
						fontWeight: 'bold',
						color: '#192f60',
					}}
				>
					Breakfast Places in Mumbai
				</h2>
				<div className='rest-container' style={{ display: 'flex' }}>
					<div className='left-section'>
						{/* <!-- --------- FILTER SECTION  -------- --> */}
						<div className='filter-section'>
							<h4 className='margin'>Filters</h4>
							<h6>Select Location</h6>
							<select
								name='select'
								id='select'
								className='bg-color'
							>
								<option value=''>Select Location</option>
							</select>
						</div>
						{/* <!-- --------- Cuisine SECTION  -------- --> */}
						<div className='cuisine-section'>
							<h5 className='margin'>Cuisine</h5>
							<div className='cuisine-box'>
								<label className='filter-container bg-color'>
									<span className='checkbox-text'>
										{' '}
										North Indian
									</span>
									<input type='checkbox' />
									<span className='checkmark'></span>
								</label>
								<label className='filter-container bg-color'>
									<span className='checkbox-text'>
										{' '}
										South Indian{' '}
									</span>
									<input type='checkbox' />
									<span className='checkmark'></span>
								</label>
								<label className='filter-container bg-color'>
									<span className='checkbox-text'>
										{' '}
										Chinise
									</span>
									<input type='checkbox' />
									<span className='checkmark'></span>
								</label>
								<label className='filter-container bg-color'>
									<span className='checkbox-text'>
										{' '}
										Fast Food
									</span>
									<input type='checkbox' />
									<span className='checkmark'></span>
								</label>
								<label className='filter-container bg-color'>
									<span className='checkbox-text'>
										{' '}
										Street Food
									</span>
									<input type='checkbox' />
									<span className='checkmark'></span>
								</label>
							</div>
						</div>
						{/* <!-- --------- Cost SECTION  -------- --> */}
						<div className='cost-section'>
							<h5 className='margin'>Cost For Two</h5>
							<div className='cost-box'>
								<label className='filter-container-1 bg-color'>
									<span className='checkbox-text1'>
										Less than <span>&#8377;</span> 500{' '}
									</span>
									<input type='radio' name='cost' />
									<span className='checkmark-1'></span>
								</label>
								<label className='filter-container-1 bg-color'>
									<span className='checkbox-text1'>
										<span>&#8377;</span> 500 to{' '}
										<span>&#8377;</span> 1000
									</span>
									<input type='radio' name='cost' />
									<span className='checkmark-1'></span>
								</label>
								<label className='filter-container-1 bg-color'>
									<span className='checkbox-text1'>
										<span>&#8377;</span> 1000 to{' '}
										<span>&#8377;</span> 1500
									</span>
									<input type='radio' name='cost' />
									<span className='checkmark-1'></span>
								</label>
								<label className='filter-container-1 bg-color'>
									<span className='checkbox-text1'>
										<span>&#8377;</span> 1500 to{' '}
										<span>&#8377;</span> 2000
									</span>
									<input type='radio' name='cost' />
									<span className='checkmark-1'></span>
								</label>
								<label className='filter-container-1 bg-color'>
									<span className='checkbox-text1'>
										<span>&#8377;</span> 2000 +{' '}
									</span>
									<input type='radio' name='cost' />
									<span className='checkmark-1'></span>
								</label>
							</div>
						</div>
						{/* Sort Section */}
						<div className='sort-section'>
							<h5 className='margin'>Sort</h5>
							<div className='sort-box'>
								<label className='filter-container-2 bg-color'>
									<span className='checkbox-text1'>
										{' '}
										Price low to high
									</span>
									<input type='radio' name='sort' />
									<span className='checkmark-2'></span>
								</label>
								<label className='filter-container-2 bg-color'>
									<span className='checkbox-text1'>
										{' '}
										Price high to low
									</span>
									<input type='radio' name='sort' />
									<span className='checkmark-2'></span>
								</label>
							</div>
						</div>
					</div>

					<div className='right-section'>
						<RestaurantGrid />
					</div>
				</div>
			</Container>
			<Footer />
		</>
	)
}
//
export default RestaurantScreen

import React from 'react'
import { Container } from 'react-bootstrap'
import './RestaurantBrief.css'
// import ""
const RestaurantBrief = ({ restaurant }) => {
	return (
		<>
			<Container className='rest-brief-container'>
				<div className='top-container'>
					<img src={restaurant.img} alt='' className='top-left' />

					<div className='top-right'>
						<h4
							className='biggest-font'
							style={{ color: '#192f60', fontWeight: '600' }}
						>
							{restaurant.name}
						</h4>
						<span
							className='location'
							style={{ color: '#192f60', fontWeight: '500' }}
						>
							{restaurant.location}
						</span>
						<div>
							<p
								className='small-font-color address'
								style={{
									color: '#636f88',
									fontWeight: '500',
									marginTop: '5px',
								}}
							>
								{restaurant.address}
							</p>
						</div>
					</div>
				</div>

				<hr />

				<div className='bottom-container'>
					<div className='bottom-left'>
						<h6
							className='small-font-color'
							style={{ color: '#192f60', fontWeight: '500' }}
						>
							CUISINES:
						</h6>
						<h6
							className='small-font-color padding-top'
							style={{ color: '#192f60', fontWeight: '500' }}
						>
							COST FOR TWO:
						</h6>
					</div>
					<div className='bottom-right'>
						<h6 style={{ color: '#192f60', fontWeight: '600' }}>
							{restaurant.cuisines}
						</h6>
						<h6
							className='padding-top'
							style={{ color: '#192f60', fontWeight: '600' }}
						>
							<span>&#8377;</span>
							{restaurant.price}
						</h6>
					</div>
				</div>
			</Container>
		</>
	)
}

export default RestaurantBrief

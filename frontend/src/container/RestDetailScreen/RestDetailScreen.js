import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import restaurants from '../../restaurants'
import './RestDetailScreen.css'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import MenuItem from '../../components/MenuItem/MenuItem'

const RestDetailScreen = () => {
	const { id } = useParams()
	const restaurant = restaurants.find((rest) => rest._id === id)

	const [value, setValue] = useState('1')

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<Header />
			<Container>
				<div className='top-img-gallary'>
					<img src={restaurant.img} alt='' />
				</div>
				<div className='bottom-rest-container'>
					<h3>{restaurant.name}</h3>
					<div className='place-order-btn'>
						<Link to='/cart'>
							<Button variant='danger'>Place an Order</Button>
						</Link>
					</div>
					<div className=''>
						<Box
							sx={{
								width: '100%',
								typography: 'body1',
							}}
						>
							<TabContext value={value}>
								<Box
									sx={{
										borderBottom: 1,
										borderColor: 'divider',
									}}
								>
									<TabList
										onChange={handleChange}
										aria-label='lab API tabs example'
									>
										<Tab label='Overview' value='1' />
										<Tab label='Contact' value='2' />
										<Tab label='Order Online' value='3' />
									</TabList>
								</Box>
								<TabPanel value='1'>
									<h5
										style={{
											margin: '0.5rem 0 1.7rem 0',
											fontWeight: 'bold',
										}}
									>
										About this Place
									</h5>
									<div className=''>
										<h6 style={{ fontWeight: 'bold' }}>
											Cuisine
										</h6>
										<p
											style={{
												fontSize: '15px',
												marginBottom: '1.5rem',
											}}
										>
											{restaurant.cuisines}
										</p>
									</div>
									<div className=''>
										<h6 style={{ fontWeight: 'bold' }}>
											Average Cost
										</h6>
										<p style={{ fontSize: '15px' }}>
											₹{restaurant.price} for two
											people(approx.)
										</p>
									</div>
								</TabPanel>
								<TabPanel value='2'>
									<div className='phone'>
										<p style={{ marginBottom: '0.3rem' }}>
											Phone Number
										</p>
										<p
											style={{
												color: 'red',
												marginBottom: '1.5rem',
											}}
										>
											{restaurant.phone}
										</p>
									</div>
									<div className='address'>
										<h6>{restaurant.name}</h6>
										<p
											style={{
												maxWidth: '330px',
												color: 'rgb(140, 150, 171)',
											}}
										>
											{restaurant.address}
										</p>
									</div>
								</TabPanel>

								<TabPanel value='3'>
									<div className=''>
										<MenuItem restaurant={restaurant} />
									</div>
								</TabPanel>
							</TabContext>
						</Box>
					</div>
				</div>
				{/* <Link to="/" className="btn btn-light my-3 mx-3" >Go Back</Link> */}
			</Container>
			<Footer />
		</>
	)
}

export default RestDetailScreen

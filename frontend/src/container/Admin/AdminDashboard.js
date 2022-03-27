import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './AdminDashboard.css'
import CategoryCreate from './Category/CategoryCreate';

const AdminDashboard = () => {
	return (
		<>
			<Header />
			<Container>
				<Row
					className='dashboard-container'
					style={{ marginTop: '2rem', height: '70vh' }}
				>
					<Col md={3}>
						<h5 style={{ marginBottom: '2rem' }}>
							Admin Dashboard
						</h5>
						<h5 className='admin-h5'>
							<Link to='/admin/restaurant'>Restaurant</Link>
						</h5>
						<h5 className='admin-h5'>
							<Link to='/admin/restaurants'>Restaurants</Link>
						</h5>
						<h5 className='admin-h5'>
							<Link to='/admin/category'>Category</Link>
						</h5>
						<h5 className='admin-h5'>
							<Link to='/admin/orders'>Orders</Link>
						</h5>
					</Col>

					<Col md={9}>
						<CategoryCreate />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export default AdminDashboard

import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loading/Loading'

import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'

const CategoryEditScreen = ({ location, history }) => {
	const [name, setName] = useState(null)
	const [image, setImage] = useState(null)
	const [description, setDescription] = useState(null)
	const [message, setMessage] = useState(null)
	const [loading, setLoading] = useState(null)
	const [success, setSuccess] = useState(null)
	const [error, setsetError] = useState(null)

	const navigate = useNavigate()

	return (
		<>
			<Header />
			<Container style={{ marginTop: '2rem' }}>
				<Row>
					<Col md={4}>
						<h2>Update Category</h2>
						{message && (
							<ErrorMessage severity='error'>
								{message}
							</ErrorMessage>
						)}
						{}
						{success && (
							<ErrorMessage severity='success'>
								Category Updated
							</ErrorMessage>
						)}
						{loading ? (
							<Loader />
						) : error ? (
							<ErrorMessage severity='error'>
								{error}
							</ErrorMessage>
						) : (
							<Form>
								<Form.Group
									className='form-divs mt-3'
									controlId='name'
								>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type='name'
										placeholder='Enter Category name'
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Form.Group
									className='form-divs mt-3'
									controlId='description'
								>
									<Form.Label>Description</Form.Label>
									<Form.Control
										type='description'
										placeholder='Enter Category description'
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Form.Group
									className='form-divs mt-3'
									controlId='formFile'
								>
									<Form.Label>
										Upload Category Image
									</Form.Label>
									<Form.Control
										type='file'
										placeholder='Upload Category Image'
										value={image}
										onChange={(e) =>
											setImage(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Button
									type='submit'
									variant='primary'
									style={{ marginTop: '1rem' }}
								>
									Update
								</Button>
							</Form>
						)}
					</Col>

					{/* import { listMyOrders } from '../actions/orderActions' */}

					{/* const orderListMy = useSelector((state) => state.orderListMy)
	const { loading: loadingOrders, error: errorOrders, orders } = orderListMy */}
					{/* <Col md={9}>
				<h2>My Orders</h2>
				{loadingOrders ? (
					<Loader />
				) : errorOrders ? (
					<ErrorMessage severity='danger'>{errorOrders}</ErrorMessage>
				) : (
					<Table
						striped
						bordered
						hover
						responsive
						className='table-sm'
					>
						<thead>
							<tr>
								<th>ID</th>
								<th>DATE</th>
								<th>TOTAL</th>
								<th>PAID</th>
								<th>DELIVERED</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>{order.totalPrice}</td>
									<td>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<i
												className='fas fa-times'
												style={{ color: 'red' }}
											></i>
										)}
									</td>
									<td>
										{order.isDelivered ? (
											order.deliveredAt.substring(0, 10)
										) : (
											<i
												className='fas fa-times'
												style={{ color: 'red' }}
											></i>
										)}
									</td>
									<td>
										<LinkContainer
											to={`/order/${order._id}`}
										>
											<Button
												className='btn-sm'
												variant='light'
											>
												Details
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col> */}
				</Row>
			</Container>
		</>
	)
}

export default CategoryEditScreen

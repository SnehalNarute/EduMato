import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loading/Loading'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
// import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'

import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './ProfileScreen.css'

const ProfileScreen = ({ location, history }) => {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
	const { success } = userUpdateProfile

	// const orderListMy = useSelector((state) => state.orderListMy)
	// const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

	const navigate = useNavigate()

	useEffect(() => {
		if (!userInfo) {
			navigate('/login')
		} else {
			if (!user || !user.firstname || !user.lastname || success) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET })
				dispatch(getUserDetails('profile'))
				// dispatch(listMyOrders())
			} else {
				setFirstname(user.firstname)
				setLastname(user.lastname)
				setEmail(user.email)
			}
		}
	}, [dispatch, navigate, userInfo, user, success])

	const submitHandler = (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(
				updateUserProfile({
					id: user._id,
					firstname,
					lastname,
					email,
					password,
				})
			)
		}
	}

	return (
		<>
			<Header />
			<Container style={{ marginTop: '2rem' }}>
				<Row>
					<Col md={4}>
						<h2>User Profile</h2>
						{message && (
							<ErrorMessage severity='error'>
								{message}
							</ErrorMessage>
						)}
						{}
						{success && (
							<ErrorMessage severity='success'>
								Profile Updated
							</ErrorMessage>
						)}
						{loading ? (
							<Loader />
						) : error ? (
							<ErrorMessage severity='error'>
								{error}
							</ErrorMessage>
						) : (
							<Form onSubmit={submitHandler}>
								<Form.Group
									className='form-divs'
									controlId='firstname'
								>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type='name'
										placeholder='Enter First name'
										value={firstname}
										onChange={(e) =>
											setFirstname(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Form.Group
									className='form-divs'
									controlId='lastname'
								>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type='name'
										placeholder='Enter Last name'
										value={lastname}
										onChange={(e) =>
											setLastname(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Form.Group
									className='form-divs'
									controlId='email'
								>
									<Form.Label>Email Address</Form.Label>
									<Form.Control
										type='email'
										placeholder='Enter email'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Form.Group
									className='form-divs'
									controlId='password'
								>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type='password'
										placeholder='Enter password'
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									></Form.Control>
								</Form.Group>

								<Form.Group
									className='form-divs'
									controlId='confirmPassword'
								>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type='password'
										placeholder='Confirm password'
										value={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
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

export default ProfileScreen

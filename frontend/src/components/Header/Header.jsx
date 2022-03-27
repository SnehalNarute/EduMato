import React, { useEffect } from 'react'
import './Header.css'
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	useEffect(() => {}, [userInfo])

	return (
		<>
			<Navbar style={{ background: '#ce0505' }}>
				<Container>
					<LinkContainer
						to='/'
						style={{
							color: '#ce0505',
							background: '#fff',
							padding: '0.3rem 0.6rem',
							borderRadius: '50%',
							fontWeight: '600',
						}}
					>
						<Navbar.Brand>e!</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />

					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i>{' '}
									Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown
									title={userInfo.firstname}
									id='username'
								>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/'>
										<NavDropdown.Item>
											Homepage
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/login'>
										<NavDropdown.Item
											onClick={logoutHandler}
										>
											Logout
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							) : (
								<>
									<LinkContainer
										to='/login'
										style={{ paddingRight: '2rem' }}
									>
										<Nav.Link>Sign In</Nav.Link>
									</LinkContainer>
									<LinkContainer to='/register'>
										<Button variant='outline-light'>
											Create an account
										</Button>
									</LinkContainer>
								</>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Screens' id='adminmenu'>
									<LinkContainer to='/admin/mealtype'>
										<NavDropdown.Item className='dropdown-item'>
											Mealtypes
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/mealtype/create'>
										<NavDropdown.Item className='dropdown-item'>
											Create Mealtypes
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/restaurant'>
										<NavDropdown.Item className='dropdown-item'>
											Restaurants
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/restaurant/create'>
										<NavDropdown.Item className='dropdown-item'>
											Create Restaurants
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header

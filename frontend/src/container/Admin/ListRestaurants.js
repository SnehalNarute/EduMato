// import React, { useState, useEffect } from 'react'
// import { Button, Container, Table } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import { Link } from 'react-router-dom'
// import Footer from '../../components/Footer/Footer'
// import Header from '../../components/Header/Header'

// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { deleteMealtype, listofMealtype } from '../../actions/mealtypeActions'

// const ListMealtypes = () => {
// 	const dispatch = useDispatch()
// 	const navigate = useNavigate()

// 	const mealtypeList = useSelector((state) => state.mealtypeList)
// 	const { mealtypes } = mealtypeList

// 	const mealtypeDelete = useSelector((state) => state.mealtypeDelete)
// 	const {
// 		loading: loadingDelete,
// 		error: errorDelete,
// 		success: successDelete,
// 	} = mealtypeDelete

// 	const userLogin = useSelector((state) => state.userLogin)
// 	const { userInfo } = userLogin

// 	useEffect(() => {
// 		if (!userInfo || !userInfo.isAdmin) {
// 			navigate('/login')
// 		}
// 		dispatch(listofMealtype())
// 	}, [dispatch, navigate, userInfo, successDelete])

// 	const deleteHandler = (slug) => {
// 		if (window.confirm('Are you sure')) {
// 			dispatch(deleteMealtype(slug))
// 		}
// 	}

// 	return (
// 		<>
// 			<Header />
// 			<Container style={{ marginTop: '1.5rem' }}>
// 				<div
// 					style={{
// 						display: 'flex',
// 						justifyContent: 'space-between',
// 						alignItems: 'center',
// 						marginBottom: '4rem',
// 					}}
// 				>
// 					<h4>List of Mealtypes</h4>
// 					<Link to='/admin/mealtype/create'>
// 						<Button>Create Mealtype</Button>
// 					</Link>
// 				</div>
// 				<div className=''>
// 					<Table
// 						striped
// 						bordered
// 						hover
// 						responsive
// 						className='table-sm'
// 					>
// 						<thead>
// 							<tr>
// 								<th>ID</th>
// 								<th>NAME</th>
// 								<th>DESCRIPTION</th>
// 							</tr>
// 						</thead>
// 						<tbody>
// 							{mealtypes.map((mealtype) => (
// 								<tr key={mealtype._id}>
// 									<td>{mealtype._id}</td>
// 									<td>{mealtype.name}</td>
// 									<td>{mealtype.description}</td>
// 									<td>
// 										<LinkContainer
// 											to={`/admin/mealtype/${mealtype.slug}`}
// 										>
// 											<Button
// 												variant='light'
// 												className='btn-sm'
// 											>
// 												update
// 											</Button>
// 										</LinkContainer>
// 										<Button
// 											variant='danger'
// 											className='btn-sm'
// 											onClick={() =>
// 												deleteHandler(mealtype.slug)
// 											}
// 										>
// 											delete
// 										</Button>
// 									</td>
// 								</tr>
// 							))}
// 						</tbody>
// 					</Table>
// 				</div>
// 			</Container>
// 			<Footer />
// 		</>
// 	)
// }

// export default ListMealtypes

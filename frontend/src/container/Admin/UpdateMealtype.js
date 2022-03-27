import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
// other imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
	listMealtypeDetails,
	updateMealtype,
} from '../../actions/mealtypeActions'
import { useDispatch, useSelector } from 'react-redux'
import { MEALTYPE_UPDATE_REQUEST } from '../../constants/mealtypeConstants'
const theme = createTheme()

const UpdateMealtype = () => {
	const { slug } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	const mealtypeDetails = useSelector((state) => state.mealtypeDetails)
	const { loading, error, mealtype } = mealtypeDetails

	const mealtypeUpdate = useSelector((state) => state.mealtypeUpdate)
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = mealtypeUpdate

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: MEALTYPE_UPDATE_REQUEST })
			navigate('/admin/mealtype')
		} else {
			if (!mealtype.name|| mealtype.name.toLowerCase() !== slug ) {
				dispatch(listMealtypeDetails(slug))
			} else {
				setName(mealtype.name)
				setDescription(mealtype.description)
			}
		}
	}, [dispatch, successUpdate, navigate, mealtype.name, mealtype._id, mealtype.description, slug])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(
			updateMealtype({
				_id: mealtype._id,
				slug,
				name,
				description,
			})
		)
	}

	return (
		<>
			<Header />
			<Container style={{ marginTop: '4rem' }}>
				<h4 style={{ textAlign: 'center' }}>Update Mealtypes</h4>
				<div>
					<ThemeProvider theme={theme}>
						<div>
							<Box
								sx={{
									marginTop: 4,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<Box
									component='form'
									onSubmit={submitHandler}
									noValidate
									sx={{ mt: 1 }}
								>
									<TextField
										margin='normal'
										required
										fullWidth
										id='name'
										label='Mealtype Name'
										name='name'
										type='name'
										value={name}
										autoComplete='name'
										autoFocus
										onChange={(e) => setName(e.target.value)}
									/>
									<TextField
										margin='normal'
										required
										fullWidth
										id='description'
										label='Mealtype description'
										name='description'
										type='description'
										value={description}
										autoComplete='description'
										onChange={(e) => setDescription(e.target.value)}
									/>

									<Button
										type='submit'
										fullWidth
										variant='contained'
										sx={{ mt: 3, mb: 2 }}
										style={{ fontFamily: 'poppins' }}
									>
										Update
									</Button>
									<Link to='/admin/mealtype'>Cancel</Link>
								</Box>
							</Box>
						</div>
					</ThemeProvider>
				</div>
			</Container>
			<Footer />
		</>
	)
}

export default UpdateMealtype

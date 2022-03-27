import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

// other imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createMealtype } from '../../actions/mealtypeActions'

const theme = createTheme()

const CreateMealtype = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const mealtypeCreate = useSelector((state) => state.mealtypeCreate)
	const { success: successCreate } = mealtypeCreate

	useEffect(() => {
		if (!userInfo) {
			navigate('/')
		}
	}, [navigate, successCreate, userInfo])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(createMealtype(name, description))
	}

	return (
		<>
			<Header />
			<Container style={{ marginTop: '4rem' }}>
				<h4 style={{ textAlign: 'center' }}>Create Mealtypes</h4>
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
									onSubmit={handleSubmit}
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
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
									<TextField
										margin='normal'
										required
										fullWidth
										id='description'
										label='Mealtype Description'
										name='description'
										type='description'
										value={description}
										autoComplete='description'
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>

									<Button
										type='submit'
										fullWidth
										variant='contained'
										sx={{ mt: 3, mb: 2 }}
										style={{ fontFamily: 'poppins' }}
									>
										Create
									</Button>
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

export default CreateMealtype

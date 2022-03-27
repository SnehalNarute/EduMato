import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../actions/userActions'

import { useNavigate } from 'react-router-dom'

const theme = createTheme()

export default function SignUp() {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cpassword, setCpassword] = useState('')

	// if user enters a wrong confirm password
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userRegister = useSelector((state) => state.userRegister)
	const { loading, error, userInfo } = userRegister

	const navigate = useNavigate()

	useEffect(() => {
		if (userInfo) {
			navigate('/login')
		}
	}, [navigate, userInfo])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password !== cpassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(register(firstname, lastname, email, password))
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 5,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography
						component='h1'
						variant='h5'
						style={{ fontFamily: 'poppins' }}
					>
						Sign up
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						{error && (
							<ErrorMessage severity='warning'>
								{error}
							</ErrorMessage>
						)}
						{message && (
							<ErrorMessage severity='warning'>
								{message}
							</ErrorMessage>
						)}
						{loading && <Loading />}
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='given-name'
									name='firstName'
									value={firstname}
									required
									fullWidth
									id='firstName'
									label='First Name'
									onChange={(e) =>
										setFirstname(e.target.value)
									}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									value={lastname}
									autoComplete='family-name'
									onChange={(e) =>
										setLastname(e.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									value={email}
									autoComplete='email'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									value={password}
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='cpassword'
									value={cpassword}
									label='Confirm Password'
									type='password'
									id='cpassword'
									autoComplete=''
									onChange={(e) =>
										setCpassword(e.target.value)
									}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							style={{ fontFamily: 'poppins' }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Link
								to='/login'
								variant='body2'
								style={{
									fontFamily: 'poppins',
									marginRight: '3.5rem',
								}}
							>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Box>
				</Box>
			</Container>
			<Footer />
		</ThemeProvider>
	)
}

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
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

const theme = createTheme()

const SignIn = ({ history }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin

	const navigate = useNavigate()

	useEffect(() => {
		if (userInfo) {
			navigate('/')
		}
	}, [navigate, userInfo])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container component='main' maxWidth='xs'>
				<CssBaseline />

				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar
						sx={{
							m: 1,
							bgcolor: 'primary.main',
						}}
					>
						<LockOutlinedIcon />
					</Avatar>
					<Typography
						component='h1'
						variant='h5'
						style={{ fontFamily: 'poppins' }}
					>
						Sign in
					</Typography>

					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						{error && (
							<ErrorMessage severity='warning'>
								{error}
							</ErrorMessage>
						)}
						{loading && <Loading />}
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							type='email'
							value={email}
							autoComplete='email'
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							id='password'
							label='Password'
							name='password'
							type='password'
							value={password}
							autoComplete='current-password'
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							style={{ fontFamily: 'poppins' }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link
									to='/register'
									style={{
										fontFamily: 'poppins',
										marginLeft: '3.5rem',
									}}
								>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>

			<Footer />
		</ThemeProvider>
	)
}
export default SignIn

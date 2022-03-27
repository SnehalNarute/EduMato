import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = (props) => {
	return (
		<>
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
				{...props}
				margin="2rem 0 1rem 0"
			>
				{'Copyright © '}
				<Link color='inherit' to='/'>
					EduMato
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</>
	)
}

export default Footer

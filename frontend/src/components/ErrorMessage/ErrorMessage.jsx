import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const ErrorMessage = ({ severity = 'info', children }) => {
	return (
		<>
			<Stack sx={{ width: '100%' }} spacing={2} style={{ margin: "0.5rem 0 1.3rem 0" }} >
				<Alert severity={severity} >
					{children}
				</Alert>
			</Stack>
		</>
	)
}

export default ErrorMessage

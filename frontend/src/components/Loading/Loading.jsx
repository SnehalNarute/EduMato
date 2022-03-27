import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loading = ({ size = 50 }) => {
	return (
		<>
			<Box
				sx={{ display: 'flex' }}
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<CircularProgress style={{ width: size, height: size }} />
			</Box>
		</>
	)
}

export default Loading

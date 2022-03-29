import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MealType = ({ mealtype }) => {
	return (
		<>
				<Link to={`/mealtype/${mealtype.slug}`}>
					<Card
						className='my-3 rounded'
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						{/* <img
							src={mealtype.image}
							alt=''
							style={{
								width: '140px',
								height: '140px',
								objectFit: 'cover',
							}}
						/> */}
						<div
							className='mealtype-text-container'
							style={{ padding: '0.5rem 1rem' }}
						>
							<Card.Title
								style={{
									fontSize: 'larger',
									color: '#192f60',
									marginBottom: '1rem',
								}}
							>
								{mealtype.name}
							</Card.Title>
							<Card.Text
								style={{
									fontSize: 'medium',
									color: '#8c96ab',
								}}
							>
								{mealtype.description}
							</Card.Text>
						</div>
					</Card>
				</Link>
			
		</>
	)
}
//
export default MealType

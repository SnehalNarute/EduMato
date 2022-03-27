import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import restaurants from '../../restaurants'
import RestaurantBrief from '../RestaurantBrief/RestaurantBrief'

const RestaurantGrid = () => {
	return (
		<>
			<Row>
				{restaurants.map((restaurant) => (
					<Col
						lg={12}
						key={restaurant._id}
						style={{ marginBottom: '2rem' }}
					>
						<Link to={`/restaurant/${restaurant._id}`}>
							<RestaurantBrief restaurant={restaurant} />
						</Link>
					</Col>
				))}
			</Row>
		</>
	)
}

export default RestaurantGrid

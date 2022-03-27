import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import MealType from '../MealType/MealType'
import { useDispatch, useSelector } from 'react-redux'
import { listofMealtype } from '../../actions/mealtypeActions'

const MealGrid = () => {
	const dispatch = useDispatch()

	const mealtypeList = useSelector((state) => state.mealtypeList)
	const { loading, error, mealtypes } = mealtypeList

	useEffect(() => {
		dispatch(listofMealtype())
	}, [dispatch])

	return (
		<>
			<div className='meal-h6'>
				<h6 style={{ color: '#8c96ab', fontWeight: '500' }}>
					Discover restaurants by type of meal
				</h6>
			</div>
			<Row>
				{mealtypes.map((mealtype) => (
					<Col sm={8} md={6} lg={4} key={mealtype._id}>
						<MealType mealtype={mealtype} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default MealGrid

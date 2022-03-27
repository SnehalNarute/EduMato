import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MenuItemList from '../MenuItemList/MenuItemList'
import './MenuItem.css'

const MenuItem = ({ restaurant }) => {
	return (
		<>
			<h1 style={{ marginBottom: '3rem' }}>{restaurant.name}</h1>
			<Row>
				{restaurant.menu.map((menuItem) => (
					<Col
						lg={10}
						key={menuItem._id}
						style={{ marginBottom: '2rem' }}
					>
						<MenuItemList menuItem={menuItem} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default MenuItem

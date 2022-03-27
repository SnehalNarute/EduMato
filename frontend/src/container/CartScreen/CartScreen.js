import React from 'react'
import { Link } from 'react-router-dom'

const CartScreen = () => {
	return (
		<>
			<h1>CartScreen</h1>
			<Link to='/checkout'>
				<button>Checkout</button>
			</Link>
		</>
	)
}

export default CartScreen

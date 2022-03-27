import React from 'react'
import { Container } from 'react-bootstrap'
import './MenuItemList.css'

const MenuItemList = ({ menuItem }) => {
	return (
		<>
			<Container className='cart-container'>
				<div className='cart-div'>
					<img src={menuItem.image} alt='' className='cart-left' />

					<div className='cart-right'>
						<h4
							className='biggest-font'
							style={{
								color: '#192f60',
								fontWeight: '600',
								marginBottom: '0.3rem',
							}}
						>
							{menuItem.name}
						</h4>
						<div>
							<p
								className='small-font-color desc'
								style={{
									color: '#636f88',
									fontWeight: '500',
									marginTop: '5px',
									marginBottom: '0.3rem',
								}}
							>
								{menuItem.desc}
							</p>
						</div>
						<div className='cart-bottom'>
							<div className='cart-bottom-left'>
								<h6
									className='cart-price'
									style={{
										color: '#192f60',
										fontWeight: '600',
										marginTop: '0.45rem',
									}}
								>
									<span>&#8377;</span>
									{menuItem.price}
								</h6>
							</div>

							<div className='cart-bottom-right'>
								<button>
									<div className='addbtn'>
										<div className='spans'>-</div> Add{' '}
										<div className='spans'>+</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
// name, price,desc,image
export default MenuItemList

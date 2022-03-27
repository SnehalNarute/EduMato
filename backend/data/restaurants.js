const restaurants = [
	{
		_id: '1',
		name: 'Gulab Restaurant',
		location: 'Malad', // city
		address: 'Marol Naka Road, Malad East-400091', // location
		price: 600,
		cuisines: ['Fast Food, ', 'North Indian'],
		phone: '+91 114004596',
		menu: [
			{
				_id: '1',
				name: 'Butter Chicken',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Chicken Parotta',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '1',
				title: 'Breakfast',
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
		],
	},
	{
		_id: '2',
		name: 'Dominoz',
		location: 'Goregaon',
		address: 'Station Road, Goregaon-400091 ',
		price: 700,
		cuisines: ['Junk Food'],
		phone: '+91 14110963',
		menu: [
			{
				_id: '1',
				name: 'Golden Corn Pizza',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Peppy Paneer Pizza',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '3',
				name: 'Margherita Pizza',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '2',
				title: 'Lunch',
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '3',
				title: 'Snacks',
				description: 'Start your day with exclusive snacks options',
			},
			{
				_id: '5',
				title: 'Drinks',
				description: 'Start your day with exclusive drinks options',
			},
		],
	},
	{
		_id: '3',
		name: 'Sharvi Family Restaurant',
		location: 'Virar',
		address: 'Global City Road, Virar-401303',
		price: 500,
		cuisines: ['Indian Meals'],
		phone: '+91 964004511',
		menu: [
			{
				_id: '1',
				name: 'Dal Fry',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Chole Bhature',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '2',
				title: 'Lunch',
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
		],
	},
	{
		_id: '4',
		name: 'Empire Restaurant',
		location: 'Pune',
		address: 'City Road, Koregaon Park-530006, Pune',
		price: 400,
		cuisines: ['South Indian, ', 'Chinese'],
		phone: '+91 454004000',
		menu: [
			{
				_id: '1',
				name: 'Hakka Noodles',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Veg Noodles',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '3',
				name: 'Podi Idli',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '1',
				title: 'Breakfast',
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '3',
				title: 'Snacks',
				description: 'Start your day with exclusive snacks options',
			},
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '5',
				title: 'Drinks',
				description: 'Start your day with exclusive drinks options',
			},
		],
	},
	{
		_id: '5',
		name: 'Captain Sams',
		location: 'Delhi',
		address: 'Sector70, Delhi-515436',
		price: '300',
		cuisines: ['South Indian, Maharashtrian'],
		phone: '+91 1586947235',
		menu: [
			{
				_id: '1',
				name: 'Idli Sambhar',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Rice Meal',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '3',
				name: 'Paneer Tikka',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '4',
				name: 'Matar Paneer',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '1',
				title: 'Breakfast',
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '5',
				title: 'Drinks',
				description: 'Start your day with exclusive drinks options',
			},
		],
	},
	{
		_id: '6',
		name: 'Star Planet',
		location: 'Mumbai',
		address: 'Borivali West, Mumbai-210006, Mumbai',
		price: 1000,
		cuisines: ['North Indian'],
		phone: '+91 366582416',
		menu: [
			{
				_id: '1',
				name: 'Chicken Tandoori',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Paneer Tikka',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '6',
				title: 'Nightlife',
				description:
					'Start your day with exclusive night snacks options',
			},
		],
	},
	{
		_id: '7',
		name: 'Royal Star',
		location: 'Pune',
		address: 'West Side, Pune-530006, Pune',
		price: 550,
		cuisines: ['Street Food, ', 'South Indian'],
		phone: '+91 745852321',
		menu: [
			{
				_id: '1',
				name: 'Maharashtrian Thali',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Rice Meal',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '3',
				name: 'Chilli Paneer',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '4',
				name: 'Dal Fry',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '5',
				name: 'Chole Bhature',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '1',
				title: 'Breakfast',
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '2',
				title: 'Lunch',
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '5',
				title: 'Drinks',
				description: 'Start your day with exclusive drinks options',
			},
		],
	},
	{
		_id: '8',
		name: 'South Indian',
		location: 'Delhi',
		address: 'Delhi sector-360, Delhi-110001',
		price: 800,
		cuisines: ['South Indian', ' Chinese'],
		phone: '+91 656975412',
		menu: [
			{
				_id: '1',
				name: 'Hakka Noodles',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '2',
				name: 'Machurian Gravy',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
			{
				_id: '3',
				name: 'Crispy Veg',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			},
		],
		mealtypes: [
			{
				_id: '4',
				title: 'Dinner',
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '2',
				title: 'Lunch',
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '6',
				title: 'Nightlife',
				description:
					'Start your day with exclusive night snacks options',
			},
			{
				_id: '5',
				title: 'Drinks',
				description: 'Start your day with exclusive drinks options',
			},
		],
	},
]
module.exports = restaurants

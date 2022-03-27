import Breakfast from './assets/breakfast.png'
import Lunch from './assets/lunch.png'
import Snacks from './assets/snacks.png'
import Dinner from './assets/dinner.png'
import Drinks from './assets/drinks.png'
import Nightlife from './assets/nightlife.png'
// menu images
import butterchicken from './assets/butterchicken.png'
import chickenparotta from './assets/chickenparotta.png'
import goldencorn from './assets/goldencorn.png'
import peppypaneerpizza from './assets/peppypaneerpizza.png'
import margherita from './assets/margherita.png'
import dalfry from './assets/dalfry.png'
import cholebhature from './assets/cholebhature.png'
import hakkanoodles from './assets/hakkanoodles.png'
import vegnoodles from './assets/vegnoodles.png'
import podiidli from './assets/podiidli.png'
import ricemeal from './assets/ricemeal.png'
import chickentandoori from './assets/chickentandoori.png'
import paneertikka from './assets/paneertikka.png'
import chillipaneer from './assets/chillipaneer.png'
import manchuriangravy from './assets/manchuriangravy.png'
import crispyveg from './assets/crispyveg.png'

const restaurants = [
	{
		_id: '1',
		name: 'Gulab Restaurant',
		location: 'Malad',
		address: 'Marol Naka Road, Malad East-400091',
		price: 600,
		cuisines: ['Fast Food, ', 'North Indian'],
		img: `${Lunch}`,
		phone: '+91 114004596',
		menu: [
			{
				_id: '1',
				name: 'Butter Chicken',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${butterchicken}`,
			},
			{
				_id: '2',
				name: 'Chicken Parotta',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${chickenparotta}`,
			},
		],
		mealtypes: [
			{
				_id: '1',
				title: 'Breakfast',
				image: `${Breakfast}`,
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
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
		img: `${Lunch}`,
		phone: '+91 14110963',
		menu: [
			{
				_id: '1',
				name: 'Golden Corn Pizza',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${goldencorn}`,
			},
			{
				_id: '2',
				name: 'Peppy Paneer Pizza',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${peppypaneerpizza}`,
			},
			{
				_id: '3',
				name: 'Margherita Pizza',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${margherita}`,
			},
		],
		mealtypes: [
			{
				_id: '2',
				title: 'Lunch',
				image: `${Lunch}`,
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '3',
				title: 'Snacks',
				image: `${Snacks}`,
				description: 'Start your day with exclusive snacks options',
			},
			{
				_id: '5',
				title: 'Drinks',
				image: `${Drinks}`,
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
		img: `${Breakfast}`,
		phone: '+91 964004511',
		menu: [
			{
				_id: '1',
				name: 'Dal Fry',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${dalfry}`,
			},
			{
				_id: '2',
				name: 'Chole Bhature',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${cholebhature}`,
			},
		],
		mealtypes: [
			{
				_id: '2',
				title: 'Lunch',
				image: `${Lunch}`,
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
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
		img: `${Snacks}`,
		phone: '+91 454004000',
		menu: [
			{
				_id: '1',
				name: 'Hakka Noodles',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${hakkanoodles}`,
			},
			{
				_id: '2',
				name: 'Veg Noodles',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${vegnoodles}`,
			},
			{
				_id: '3',
				name: 'Podi Idli',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${podiidli}`,
			},
		],
		mealtypes: [
			{
				_id: '1',
				title: 'Breakfast',
				image: `${Breakfast}`,
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '3',
				title: 'Snacks',
				image: `${Snacks}`,
				description: 'Start your day with exclusive snacks options',
			},
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '5',
				title: 'Drinks',
				image: `${Drinks}`,
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
		img: `${Snacks}`,
		phone: '+91 1586947235',
		menu: [
			{
				_id: '1',
				name: 'Idli Sambhar',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${Breakfast}`,
			},
			{
				_id: '2',
				name: 'Rice Meal',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${ricemeal}`,
			},
			{
				_id: '3',
				name: 'Paneer Tikka',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${paneertikka}`,
			},
			{
				_id: '4',
				name: 'Matar Paneer',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${Dinner}`,
			},
		],
		mealtypes: [
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '1',
				title: 'Breakfast',
				image: `${Breakfast}`,
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '5',
				title: 'Drinks',
				image: `${Drinks}`,
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
		img: `${Dinner}`,
		phone: '+91 366582416',
		menu: [
			{
				_id: '1',
				name: 'Chicken Tandoori',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${chickentandoori}`,
			},
			{
				_id: '2',
				name: 'Paneer Tikka',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${paneertikka}`,
			},
		],
		mealtypes: [
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '6',
				title: 'Nightlife',
				image: `${Nightlife}`,
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
		img: `${Snacks}`,
		phone: '+91 745852321',
		menu: [
			{
				_id: '1',
				name: 'Maharashtrian Thali',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${Lunch}`,
			},
			{
				_id: '2',
				name: 'Rice Meal',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${ricemeal}`,
			},
			{
				_id: '3',
				name: 'Chilli Paneer',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${chillipaneer}`,
			},
			{
				_id: '4',
				name: 'Dal Fry',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${dalfry}`,
			},
			{
				_id: '5',
				name: 'Chole Bhature',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${cholebhature}`,
			},
		],
		mealtypes: [
			{
				_id: '1',
				title: 'Breakfast',
				image: `${Breakfast}`,
				description: 'Start your day with exclusive breakfast options',
			},
			{
				_id: '2',
				title: 'Lunch',
				image: `${Lunch}`,
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '5',
				title: 'Drinks',
				image: `${Drinks}`,
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
		img: `${Lunch}`,
		phone: '+91 656975412',
		menu: [
			{
				_id: '1',
				name: 'Hakka Noodles',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${hakkanoodles}`,
			},
			{
				_id: '2',
				name: 'Machurian Gravy',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${manchuriangravy}`,
			},
			{
				_id: '3',
				name: 'Crispy Veg',
				price: 120,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				image: `${crispyveg}`,
			},
		],
		mealtypes: [
			{
				_id: '4',
				title: 'Dinner',
				image: `${Dinner}`,
				description: 'Start your day with exclusive dinner options',
			},
			{
				_id: '2',
				title: 'Lunch',
				image: `${Lunch}`,
				description: 'Start your day with exclusive lunch options',
			},
			{
				_id: '6',
				title: 'Nightlife',
				image: `${Nightlife}`,
				description:
					'Start your day with exclusive night snacks options',
			},
			{
				_id: '5',
				title: 'Drinks',
				image: `${Drinks}`,
				description: 'Start your day with exclusive drinks options',
			},
		],
	},
]

export default restaurants

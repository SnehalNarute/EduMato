import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
} from './reducers/userReducers'

import {
	mealtypeCreateReducer,
	mealtypeDeleteReducer,
	mealtypeDetailsReducer,
	mealtypeListReducer,
	mealtypeUpdateReducer,
} from './reducers/mealtypeReducers'

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	mealtypeCreate: mealtypeCreateReducer,
	mealtypeList: mealtypeListReducer,
	mealtypeDelete: mealtypeDeleteReducer,
	mealtypeDetails: mealtypeDetailsReducer,
	mealtypeUpdate: mealtypeUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store

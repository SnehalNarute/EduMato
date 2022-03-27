import {
	MEALTYPE_ADD_FAIL,
	MEALTYPE_ADD_REQUEST,
	MEALTYPE_ADD_SUCCESS,
	MEALTYPE_LIST_FAIL,
	MEALTYPE_LIST_REQUEST,
	MEALTYPE_LIST_SUCCESS,
	MEALTYPE_DELETE_FAIL,
	MEALTYPE_DELETE_REQUEST,
	MEALTYPE_DELETE_SUCCESS,
	MEALTYPE_DETAILS_REQUEST,
	MEALTYPE_DETAILS_SUCCESS,
	MEALTYPE_DETAILS_FAIL,
	MEALTYPE_UPDATE_REQUEST,
	MEALTYPE_UPDATE_SUCCESS,
	MEALTYPE_UPDATE_FAIL,
	MEALTYPE_UPDATE_RESET,
} from '../constants/mealtypeConstants'

// ====================================================================

export const mealtypeCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case MEALTYPE_ADD_REQUEST:
			return { loading: true }
		case MEALTYPE_ADD_SUCCESS:
			return { loading: false, success: true }
		case MEALTYPE_ADD_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
// ====================================================================

export const mealtypeListReducer = (state = { mealtypes: [] }, action) => {
	switch (action.type) {
		case MEALTYPE_LIST_REQUEST:
			return { loading: true, mealtypes: [] }
		case MEALTYPE_LIST_SUCCESS:
			return { loading: false, mealtypes: action.payload }
		case MEALTYPE_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const mealtypeDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case MEALTYPE_DELETE_REQUEST:
			return { loading: true }
		case MEALTYPE_DELETE_SUCCESS:
			return { loading: false, success: true }
		case MEALTYPE_DELETE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const mealtypeDetailsReducer = (state = { mealtype: {} }, action) => {
	switch (action.type) {
		case MEALTYPE_DETAILS_REQUEST:
			return { ...state, loading: true }
		case MEALTYPE_DETAILS_SUCCESS:
			return { loading: false, mealtype: action.payload }
		case MEALTYPE_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const mealtypeUpdateReducer = (state = { mealtype: {} }, action) => {
	switch (action.type) {
		case MEALTYPE_UPDATE_REQUEST:
			return { loading: true }
		case MEALTYPE_UPDATE_SUCCESS:
			return { loading: false, success: true, product: action.payload }
		case MEALTYPE_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case MEALTYPE_UPDATE_RESET:
			return { mealtype: {} }
		default:
			return state
	}
}

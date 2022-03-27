import axios from 'axios'

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
	MEALTYPE_UPDATE_FAIL,
	MEALTYPE_UPDATE_REQUEST,
	MEALTYPE_UPDATE_SUCCESS,
	MEALTYPE_DETAILS_REQUEST,
	MEALTYPE_DETAILS_FAIL,
	MEALTYPE_DETAILS_SUCCESS,
} from '../constants/mealtypeConstants'
import { logout } from './userActions'


export const createMealtype =
	(name, description) => async (dispatch, getState) => {
		try {
			dispatch({
				type: MEALTYPE_ADD_REQUEST,
			})

			const {
				userLogin: { userInfo },
			} = getState()

			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${userInfo.token}`,
				},
			}

			const { data } = await axios.post(
				'/api/mealtype/create',
				{ name, description },
				config
			)

			dispatch({
				type: MEALTYPE_ADD_SUCCESS,
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: MEALTYPE_ADD_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			})
		}
	}

export const listofMealtype = () => async (dispatch) => {
	try {
		dispatch({
			type: MEALTYPE_LIST_REQUEST,
		})

		const { data } = await axios.get('/api/mealtype')

		dispatch({
			type: MEALTYPE_LIST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: MEALTYPE_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const deleteMealtype = (slug) => async (dispatch, getState) => {
	try {
		dispatch({
			type: MEALTYPE_DELETE_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		await axios.delete(`/api/mealtype/${slug}`, config)

		dispatch({
			type: MEALTYPE_DELETE_SUCCESS,
		})
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: MEALTYPE_DELETE_FAIL,
			payload: message,
		})
	}
}

export const listMealtypeDetails = (slug) => async (dispatch) => {
	try {
		dispatch({ type: MEALTYPE_DETAILS_REQUEST })

		const { data } = await axios.get(`/api/mealtype/${slug}`)

		dispatch({
			type: MEALTYPE_DETAILS_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: MEALTYPE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const updateMealtype = (mealtype) => async (dispatch, getState) => {
	try {
		dispatch({
			type: MEALTYPE_UPDATE_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.put(
			`/api/mealtype/${mealtype.slug}`,
			mealtype,
			config
		)

		dispatch({
			type: MEALTYPE_UPDATE_SUCCESS,
			payload: data,
		})
		dispatch({ type: MEALTYPE_DETAILS_SUCCESS, payload: data })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: MEALTYPE_UPDATE_FAIL,
			payload: message,
		})
	}
}

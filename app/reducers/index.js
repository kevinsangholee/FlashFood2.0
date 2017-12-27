import { combineReducers } from 'redux'
import { SET_CATEGORIES, SET_DISTANCE, SET_PRICE, GET_RESTAURANTS } from '../actions/'

// Intial state for choices
let initialChoices = { categories: [], distance: 10, price: '$' };

// Reducer for choices
const choices = (state = initialChoices, action) => {
	switch (action.type) {
		case SET_CATEGORIES:
			return {
				...state,
				categories: action.categories,
			}
		case SET_DISTANCE:
			return {
				...state,
				distance: action.distance,
			}
		case SET_PRICE:
			return {
				...state,
				price: action.price,
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	choices
})

export default rootReducer
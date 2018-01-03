import { combineReducers } from 'redux'
import { SET_CATEGORIES, SET_DISTANCE, SET_PRICE, GET_RESTAURANTS } from '../actions/'
import Reactotron from 'reactotron-react-native'

// Intial state for choices
let initialChoices = { 
	categories: ['American', 'Asian', 'Buffet', 'Chinese', 'Fast Food', 'Japanese', 'Mediterranean', 'Mexican', 'Vegetarian', 'Pizza'],
	distance: 10, 
	price: [1, 2, 3, 4] ,
	priceNotSelected: false,
};

let initialResults = {
	finishedLoading: false,
	restaurants: [],
}

// Reducer for choices
const choices = (state = initialChoices, action) => {
	switch (action.type) {
		case SET_CATEGORIES:
			let newCategories = state.categories
			let idx = newCategories.indexOf(action.category)
			if(idx === -1) {
				newCategories.push(action.category)
			} else {
				newCategories.splice(idx, 1)
			}
			return {
				...state,
				categories: newCategories,
			}
		case SET_DISTANCE:
			return {
				...state,
				distance: action.distance,
			}
		case SET_PRICE:
			let newPrices = state.price
			idx = newPrices.indexOf(action.price)
			if(idx === -1) {
				newPrices.push(action.price)
			} else {
				newPrices.splice(idx, 1)
			}
			if(newPrices.length === 0) {
				return {
					...state,
					price: newPrices,
					priceNotSelected: true		
				}
			} else {
				return {
					...state,
					price: newPrices,
					priceNotSelected: false
				}	
			}
		default:
			return state
	}
}

const results = (state = initialResults, action) => {
	switch (action.type) {
		case GET_RESTAURANTS:
			return {
				...state,
				restaurants: action.restaurants,
				finishedLoading: true
			}
			default:
				return state
	}
}

const rootReducer = combineReducers({
	choices, results
})

export default rootReducer
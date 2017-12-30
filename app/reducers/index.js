import { combineReducers } from 'redux'
import { SET_CATEGORIES, SET_DISTANCE, SET_PRICE, GET_RESTAURANTS } from '../actions/'
import Reactotron from 'reactotron-react-native'

// Intial state for choices
let initialChoices = { 
	categories: ['American', 'Brazilian', 'Cambodian', 'Dutch', 'European', 'French', 'Greek'],
	distance: 10, 
	price: [1, 2, 3, 4] ,
	priceNotSelected: false,
};

// Reducer for choices
const choices = (state = initialChoices, action) => {
	switch (action.type) {
		case SET_CATEGORIES:
			Reactotron.log(action.category)
			let newCategories = state.categories
			let idx = newCategories.indexOf(action.category)
			Reactotron.log(newCategories)
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

const rootReducer = combineReducers({
	choices
})

export default rootReducer
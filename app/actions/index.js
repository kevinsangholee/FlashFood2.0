export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_DISTANCE =  'SET_DISTANCE'
export const SET_PRICE = 'SET_PRICE'
export const GET_RESTAURANTS = 'GET_RESTAURANTS'

export function setCategories(categories) {
	return { type: SET_CATEGORIES, categories }
}

export function setDistance(distance) {
	return { type: SET_DISTANCE, distance }
}

export function setPrice(price) {
	return { type: SET_PRICE, price }
}
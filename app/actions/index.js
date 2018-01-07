import Reactotron from 'reactotron-react-native'

export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_DISTANCE =  'SET_DISTANCE'
export const SET_PRICE = 'SET_PRICE'
export const GET_RESTAURANTS = 'GET_RESTAURANTS'

const restaurantToQuery = {
    American: "tradamerican",
    Asian: "asianfusion",
    'Breakfast and Brunch': "breakfast_brunch",
    Buffet: "buffets",
    Burgers: "burgers",
    Chinese: "chinese",
    'Fast Food': "hotdogs",
    Greek: "greek",
    'Gluten-Free': "gluten_free",
    Indian: "indpak",
    Italian: "italian",
    Japanese: "japanese",
    Korean: "korean",
    'Latin American': "latin",
    Mediterranean: "mediterranean",
    Mexican: "mexican",
    Pizza: "pizza",
    Sandwiches: "sandwiches",
    Seafood: "seafood",
    Thai: "thai",
    Vegetarian: "vegetarian",
    Vietnamese: "vietnamese"
}

const ACCESS_KEY = "Bearer sRYZ4x-ye8lzI6xgkD8AwHRiRt-o_Jvv5hbSMdccmZh9qZiTksCm6TzkzR4ztBIUBEc9f1vEzY5O0dw-tWkEH6tYn353THhZ3IwsSFNAvOB4Ns20Bs3fq5J9CCeRWXYx"
const mileToMeter = 1609

export function setCategories(category) {
	return { type: SET_CATEGORIES, category }
}

export function setDistance(distance) {
	return { type: SET_DISTANCE, distance }
}

export function setPrice(price) {
	return { type: SET_PRICE, price }
}

export function getRestaurants() {
	return function(dispatch, getState) {
		Reactotron.log("starting func")
		var params = {
			price: encodeURIComponent(getState().choices.price),
			radius: encodeURIComponent(getState().choices.distance * mileToMeter),
			latitude: encodeURIComponent(33.675368),
			longitude: encodeURIComponent(-117.6844680),
			categories: encodeURIComponent(getState().choices.categories.map(cat => restaurantToQuery[cat]).join(',')),
		}
		var url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&price=' + params.price + 
			'&radius=' + params.radius + 
			'&latitude=' + params.latitude + 
			'&longitude=' + params.longitude + 
			'&categories=' + params.categories + 
			'&open_now=true&limit=50&sort_by=distance'
		fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: ACCESS_KEY,
			},
		}).then((response) => response.json())
		.then((responseJson) => {
			dispatch(returnRestaurants(responseJson))
		})
		.catch((error) => {
			Reactotron.log("error")
			console.log(error)
		})
	}
}

export function returnRestaurants(json) {
	return {
		type: GET_RESTAURANTS,
		restaurants: json['businesses'],
	}
}
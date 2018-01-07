import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native'
import Reactotron from'reactotron-react-native'

class RestaurantComponent extends Component {

	state = {
		restaurantAnim1: new Animated.Value(0),
		restaurantAnim2: new Animated.Value(0),
		restaurantAnim3: new Animated.Value(0),
	}

	componentDidMount() {
		Animated.sequence([
			Animated.delay(500),
			Animated.parallel([
				Animated.timing(
					this.state.restaurantAnim1,
					{
						toValue: 1,
						duration: 500,
						delay: 0,
						easing: Easing.elastic(1),
					}
				),
				Animated.timing(
					this.state.restaurantAnim2,
					{
						toValue: 1,
						duration: 500,
						delay: 400,
						easing: Easing.elastic(1),
					}
				),
				Animated.timing(
					this.state.restaurantAnim3,
					{
						toValue: 1,
						duration: 500,
						delay: 500,
						easing: Easing.elastic(1),
					}
				),
			]),
		]).start();
	}

	render() {

		const { currentRestaurant, distance } = this.props
		let { restaurantAnim1, restaurantAnim2, restaurantAnim3 } = this.state;
		const categories = currentRestaurant.categories.map((item) => item.title)

		return(
			<View style={styles.container}>
				<Animated.View style={[styles.imageContainer, 
								{
									opacity: restaurantAnim1,
									transform: [{
			                            translateY: restaurantAnim1.interpolate({
			                              	inputRange: [0, 1],
			                              	outputRange: [50, 0],
			                            }),
			                        }]
								}
							]}>	
					<Image style={styles.image} source={{uri: currentRestaurant.image_url}}/>
				</Animated.View>
				<Animated.Text style={[styles.nameText,
						{
							opacity: restaurantAnim2,
							transform: [{
	                            translateY: restaurantAnim2.interpolate({
	                              	inputRange: [0, 1],
	                              	outputRange: [50, 0],
	                            }),
	                        }]
						}
					]}>{currentRestaurant.name}</Animated.Text>
				<Animated.Text style={[styles.categoryText,
								{
									opacity: restaurantAnim3,
									transform: [{
			                            translateY: restaurantAnim3.interpolate({
			                              	inputRange: [0, 1],
			                              	outputRange: [50, 0],
			                            }),
			                        }]
								}
							]}>{categories.join(', ')}</Animated.Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentRestaurant: state.results.currentRestaurant,
		distance: state.results.distance,
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		padding: 20,
	},

	imageContainer: {
		marginTop: 20,
		marginBottom: 20,
		height: 100,
		borderRadius: 50,
		shadowColor: '#000',
	    shadowOpacity: 0.5,
	    shadowRadius: 5,
	    shadowOffset: { width: 0, height: 1 },
		width: 100,
	},

	image: {
		height: 100,
		borderRadius: 50,
		shadowColor: '#000',
	    shadowOpacity: 1,
	    shadowRadius: 5,
		width: 100,
	},

	nameText: {
		fontSize: 30,
		fontWeight: '300',
		textAlign: 'center',
		paddingBottom: 5,
	},

	categoryText: {
		fontSize: 15,
		fontWeight: '200',
		textAlign: 'center',
	}
})

export default connect(mapStateToProps, null)(RestaurantComponent)
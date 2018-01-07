import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import Reactotron from'reactotron-react-native'

class RestaurantComponent extends Component {
	render() {

		const { currentRestaurant } = this.props
		const categories = currentRestaurant.categories.map((item) => item.title)

		return(
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: currentRestaurant.image_url}}/>
				<Text style={styles.nameText}>{currentRestaurant.name}</Text>
				<Text style={styles.categoryText}>{categories.join(', ')}</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentRestaurant: state.results.currentRestaurant,
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},

	image: {
		marginTop: 20,
		marginBottom: 20,
		height: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#6600CC',
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
	}
})

export default connect(mapStateToProps, null)(RestaurantComponent)
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryButton from './../components/CategoryButton';

export default class CategoriesScreen extends Component {

	state = {
		selected: false,
	}

  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.buttonRow}>
			  	<CategoryButton>Asian</CategoryButton>
			  	<CategoryButton>American</CategoryButton>
		  	</View>
		  	<View style={styles.buttonRow}>
			  	<CategoryButton>Asian</CategoryButton>
			  	<CategoryButton>American</CategoryButton>
		  	</View>
      	<View style={styles.buttonRow}>
			  	<CategoryButton>Asian</CategoryButton>
			  	<CategoryButton>American</CategoryButton>
		  	</View>
      	<View style={styles.buttonRow}>
			  	<CategoryButton>Asian</CategoryButton>
			  	<CategoryButton>American</CategoryButton>
		  	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#C39BD3',
  },
  buttonRow: {
  	flex: 0.2,
  	flexDirection: 'row',
  }
});
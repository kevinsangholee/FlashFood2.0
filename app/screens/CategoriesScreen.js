import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryButton from './../components/CategoryButton';

export default class CategoriesScreen extends Component {

	state = {
		selected: false,
	}

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select Your Categories</Text>
        </View>
        <View style={styles.buttonsContainer}>
        	<View style={styles.buttonRow}>
  			  	<CategoryButton>American</CategoryButton>
  		  	</View>
  		  	<View style={styles.buttonRow}>
  			  	<CategoryButton>Brazilian</CategoryButton>
  		  	</View>
        	<View style={styles.buttonRow}>
  			  	<CategoryButton>Cambodian</CategoryButton>
  		  	</View>
        	<View style={styles.buttonRow}>
  			  	<CategoryButton>Dutch</CategoryButton>
  		  	</View>
          <View style={styles.buttonRow}>
            <CategoryButton>European</CategoryButton>
          </View>
          <View style={styles.buttonRow}>
            <CategoryButton>French</CategoryButton>
          </View>
          <View style={styles.buttonRow}>
            <CategoryButton>Greek</CategoryButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#6600CC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  headerContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '200',
    textAlign: 'center',
  },

  buttonsContainer: {
    flex: 0.8,
    alignItems: 'center',
  },

	container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },

  buttonRow: {
  	flexDirection: 'row',
  }

});
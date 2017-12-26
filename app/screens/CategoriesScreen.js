import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CategoryButton from './../components/CategoryButton';
import CustomizationScreen from './CustomizationScreen';

export default class CategoriesScreen extends Component {

  render() {

    const { goHome } = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Categories</Text>
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
            <View style={styles.footerOffset}></View>
          </ScrollView>
        </View>
        <View style={styles.fixedBottom}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => goHome()}
            activeOpacity={0.5}>
              <Text style={styles.bottomButtonText}>🏠</Text>
          </TouchableOpacity>
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
  },

  scrollViewContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  scrollView: {
    flex: 1,
  },

  headerContainer: {
    height: 140,
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
    alignItems: 'center',
  },

	container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },

  buttonRow: {
  	flexDirection: 'row',
  },

  fixedBottom: {
    position: 'absolute',
    backgroundColor: '#6600CC',
    height: 52,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  backButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 40,
    bottom: 6,
    left: 6,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },

  nextButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 40,
    bottom: 6,
    right: 6,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },

  bottomButtonText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#FFF',
  },

  footerOffset: {
    height: 64,
  }

});
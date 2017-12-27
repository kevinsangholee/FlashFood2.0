import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import CategoryButton from './../components/CategoryButton';
import DetailsScreen from './DetailsScreen';
import CategoriesScreen from './CategoriesScreen';
import Swiper from 'react-native-swiper';

export default class CustomizationScreen extends Component {

  render() {

    const { goBack } = this.props.navigation ;
    return(
      <View style={{flex: 1}}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={{flex: 1}}>
          <Swiper 
            ref='swiper' 
            showsButtons={true} 
            loop={false}
            buttonWrapperStyle={styles.swiper}
            activeDotColor='#FFF'
            paginationStyle={styles.pagination}
            prevButton={<Text style={[styles.buttonText, styles.buttonMod]}>&larr;</Text>}
            nextButton={<Text style={[styles.buttonText, styles.buttonMod]}>&rarr;</Text>}
          >
            <CategoriesScreen goHome={goBack}/>
            <DetailsScreen />
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  swiper: {
    alignItems: 'center',
    top: 'auto',
    bottom: 0,
    height: 52,
  },

  pagination: {
    height: 52,
    bottom: 0,
  },

  buttonMod: {
    fontSize: 36,
    color: '#FFF',
  },

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
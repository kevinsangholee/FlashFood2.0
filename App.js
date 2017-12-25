import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CategoriesScreen from './app/screens/CategoriesScreen';
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';
import DistanceScreen from './app/screens/DistanceScreen';
import Swiper from 'react-native-swiper'

// const Navigator = StackNavigator({
//   Home: { screen: HomeScreen, }, 
//   Categories: { screen: CategoriesScreen },
//   Result: { screen: ResultScreen },
// }, {headerMode: 'none'});

export default class App extends Component {
  render() {
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
            buttonWrapperStyle={styles.buttons}
          >
            <HomeScreen 
              onPress={(i) => this.refs.swiper.scrollBy(i)}
            />
            <CategoriesScreen />
            <DistanceScreen />
            <ResultScreen />
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'flex-end',
  },
});

// export default Navigator;



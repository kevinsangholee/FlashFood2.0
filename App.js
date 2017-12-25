import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CategoriesScreen from './app/screens/CategoriesScreen';
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';
import CustomizationScreen from './app/screens/CustomizationScreen';
import DistanceScreen from './app/screens/DistanceScreen';
import Swiper from 'react-native-swiper';

const App = StackNavigator({
  Home: { screen: HomeScreen, }, 
  Result: { screen: ResultScreen },
  Customization: { screen: CustomizationScreen },
}, {headerMode: 'none'});

export default App;



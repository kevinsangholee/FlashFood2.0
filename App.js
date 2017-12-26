import React from 'react';
import { StackNavigator } from 'react-navigation';
import CategoriesScreen from './app/screens/CategoriesScreen';
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';
import CustomizationScreen from './app/screens/CustomizationScreen';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen, },
  Customization: { screen: CustomizationScreen },
  Categories: { screen: CategoriesScreen },
  Result: { screen: ResultScreen },
}, {headerMode: 'none'});

export default Navigator;



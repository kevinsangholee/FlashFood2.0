import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CategoriesScreen from './app/screens/CategoriesScreen';
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen, }, 
  Categories: { screen: CategoriesScreen },
  Result: { screen: ResultScreen },
}, {headerMode: 'none'})

export default Navigator;
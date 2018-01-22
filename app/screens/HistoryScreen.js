import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ActivityIndicator, Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RestaurantComponent from '../components/RestaurantComponent'
import { getRestaurants } from '../actions'

class HistoryScreen extends Component {

  static navigationOptions = {
    headerTitle: '',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source = {require('./../../images/history.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {

    return (
      <View></View>
    )
  }

}

const styles = StyleSheet.create({

  icon: {
    height: 25,
    width: 25,
  },

});

export default (HistoryScreen)
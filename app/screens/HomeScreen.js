import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const { onPress } = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>What kind of search?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.homeButton1, styles.depth1]}
              onPress={() => navigate('Result', {})}
              // onPress={() => onPress(2)}
              activeOpacity={1}>
              <Text style={styles.homeButton1Text}>🎲  Random</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.homeButton2]}
              onPress={() => navigate('Customization', {})}
              //onPress={() => onPress(1)}
              activeOpacity={1}>
              <Text style={styles.homeButton2Text}>⚙  Custom</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  depth1: {
    shadowColor: '#FFFF00',
    shadowOpacity: 0.5,
    shadowRadius: 15
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#6600CC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  headerContainer: {
    flex: 0.5,
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
    flex: 0.5,
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeButton1:  {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 6,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },

  homeButton1Text: {
    color: '#6600CC',
    fontSize: 32,
    fontWeight: '200',
    letterSpacing: 1,
    textAlign: 'left',
  },

  homeButton2:  {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#6600CC',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
  },

  homeButton2Text: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '200',
    letterSpacing: 1,
    textAlign: 'left',
  },

});
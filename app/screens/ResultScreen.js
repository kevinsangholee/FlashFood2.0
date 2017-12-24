import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ResultScreen extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.resultContainer}>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.resultButton1}
            activeOpacity={0.9}>
            <Text style={styles.resultButtonText1}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.resultButton2}
            activeOpacity={0.9}>
            <Text style={styles.resultButtonText2}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,

  },

  headerContainer: {
    flex: 1,
  },

  headerText: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '100',
    textAlign: 'left',
  },

	resultContainer: {
    flex: 8.5,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowOffset: { height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 5,
  },

  buttonsContainer: {
    flex: 1.5,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: -4,
    marginRight: -4,
  },

  resultButton1: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#6600CC',
    marginTop: 20,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 5,
  },

  resultButton2: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#6600CC',
    marginTop: 20,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 5,
    shadowOffset: { height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  resultButtonText1: {
    color: '#6600CC',
    fontSize: 32,
    fontWeight: '100',
    textAlign: 'center',
  },

  resultButtonText2: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '100',
    textAlign: 'center',
  },

});
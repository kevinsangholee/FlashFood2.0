import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Slider } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DistanceScreen extends Component {

  state = {
    currentDistance: 1,
  }

  render() {

    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>How far are you willing to go?</Text>
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.milesTextContainer}>
            <Text style={styles.distanceText}>{this.state.currentDistance}</Text>
            <Text style={styles.milesText}>mi.</Text>
          </View>
          <Slider
            style={styles.slider} 
            minimumValue={1}
            maximumValue={15}
            onValueChange={(value) => this.setState({
              currentDistance: value,
            })}
            step={1}
          />
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
    justifyContent: 'flex-start',
    padding: 10,
  },
  headerText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '200',
    textAlign: 'center',
  },
  headerContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  milesTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  slider: {
    width: 300,
  },
  distanceText: {
    color: '#FFF',
    fontSize: 150,
    fontWeight: '200',
  },
  milesText: {
    marginBottom: 20,
    color: '#FFF',
    fontSize: 60,
    fontWeight: '200',
  }
});
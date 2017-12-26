import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity, Slider } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { setDistance } from '../actions'

class DistanceScreen extends Component {

  render() {

    const { setDist, distance } = this.props

    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>How far are you willing to go?</Text>
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.milesTextContainer}>
            <Text style={styles.distanceText}>{distance}</Text>
            <Text style={styles.milesText}>mi.</Text>
          </View>
          <Slider
            style={styles.slider} 
            minimumValue={1}
            maximumValue={15}
            onValueChange={(value) => setDist(value)}
            step={1}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    distance: state.choices.distance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDist: (distance) => {
      dispatch(setDistance(distance))
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(DistanceScreen)
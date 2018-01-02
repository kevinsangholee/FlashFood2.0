import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Slider } from 'react-native';
import { setDistance } from '../actions';

class DistanceComponent extends Component {

	render() {

	    const { setDist, distance } = this.props;

		return(
	        <View style={styles.detailsContainer}>
	          <View style={styles.detailsHeaderContainer}>
	            <Text style={styles.detailsHeader}>Distance</Text>
	          </View>
	          <View style={styles.milesTextContainer}>
	            <Text style={styles.distanceText}>{distance}</Text>
	            <Text style={styles.milesText}> miles</Text>
	          </View>
	          <Slider
	            style={styles.slider} 
	            minimumValue={1}
	            maximumValue={10}
	            onValueChange={(value) => setDist(value)}
	            step={1}
	            value={10}
	            minimumTrackTintColor='#6600CC'
	          />
	        </View>
        );
	}
}

const mapStateToProps = (state) => {
  return {
    distance: state.choices.distance,
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

  detailsContainer: {
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 20,
    shadowColor: '#FFFF00',
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  detailsHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    marginBottom: 20,
  },

  detailsHeader: {
    flex: 1,
    fontWeight: '200',
    fontSize: 22,
    paddingBottom: 20,
    color: '#616161',
  },

  milesTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  slider: {
    width: 300,
  },

  distanceText: {
    fontSize: 48,
    fontWeight: '200',
  },

  milesText: {
    fontSize: 32,
    lineHeight: 48,
    fontWeight: '200',
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(DistanceComponent)
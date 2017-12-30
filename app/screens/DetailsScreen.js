import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity, Slider, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { setDistance } from '../actions';
import PriceButton from './../components/PriceButton';

class DetailsScreen extends Component {

  render() {

    const { setDist, distance, priceNotSelected } = this.props

    return (
      <View style={styles.mainContainer}>
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Details</Text>
            </View>
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
            <View style={[styles.detailsContainer, priceNotSelected && styles.priceNotSelectedContainer]}>
              <View style={styles.detailsHeaderContainer}>
                <Text style={[styles.detailsHeader, priceNotSelected && styles.priceNotSelectedHeader]}>Price</Text>
                { priceNotSelected && 
                  <Text style={styles.priceNotSelected}>Please select a price</Text>
                }
              </View>
              <View style={styles.priceButtonRow}>
                <PriceButton value={1} noneSelected={priceNotSelected}>$</PriceButton>
                <PriceButton value={2} noneSelected={priceNotSelected}>$$</PriceButton>
                <PriceButton value={3} noneSelected={priceNotSelected}>$$$</PriceButton>
                <PriceButton value={4} noneSelected={priceNotSelected}>$$$$</PriceButton>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.detailsHeaderContainer}>
                <Text style={styles.detailsHeader}>Categories</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    distance: state.choices.distance,
    priceNotSelected: state.choices.priceNotSelected
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
  },

  headerText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '200',
    textAlign: 'center',
  },

  scrollViewContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  scrollView: {
    flex: 1,
  },

  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },

  detailsContainer: {
    marginVertical: 6,
    marginHorizontal: 20,
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
    fontWeight: '300',
    fontSize: 22,
    paddingBottom: 20,
    color: '#616161',
  },

  priceButtonRow: {
    flexDirection: 'row',
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

  priceNotSelected: {
    marginTop: 6,
    color: 'red',
    fontSize: 13,
  },

  priceNotSelectedHeader: {
    color: 'red'
  },

  priceNotSelectedContainer: {
    shadowColor: 'red',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    backgroundColor: '#FFF2F1'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)
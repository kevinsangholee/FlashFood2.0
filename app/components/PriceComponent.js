import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import PriceButton from './../components/PriceButton';

class PriceComponent extends Component {

	render() {

	  const { priceNotSelected } = this.props;

		return(
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
    );
	}
}

const mapStateToProps = (state) => {
  return {
    priceNotSelected: state.choices.priceNotSelected
  }
}

const styles = StyleSheet.create({

  detailsContainer: {
    marginVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: '#6600CC',
    shadowOpacity: 1,
    shadowRadius: 5,
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

  priceButtonRow: {
    flexDirection: 'row',
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
  },

});

export default connect(mapStateToProps, null)(PriceComponent)
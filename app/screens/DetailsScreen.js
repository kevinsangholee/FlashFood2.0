import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Animated, Easing, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CategoryButton from './../components/CategoryButton';
import DistanceComponent from './../components/DistanceComponent';
import PriceComponent from './../components/PriceComponent';


class DetailsScreen extends Component {

  state = {
    popupAnim: new Animated.Value(0),
    popupActive: false,
  }

  togglePopupOn = () => {
    this.setState({popupActive: true})
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.popupAnim,
          {
            toValue: 1,
            duration: 500,
            easing: Easing.elastic(1),
          }
        ),
      ]),
    ]).start();
  }

  togglePopupOff = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.popupAnim,
          {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
          }
        ),
      ]),
    ]).start();
    this.setState({popupActive: false})
  }

  render() {

    const { togglePopup } = this.props
    let { popupAnim, popupActive } = this.state

    return (
      <View style={styles.mainContainer}>
        <View style={styles.scrollViewContainer1}>
          <ScrollView style={styles.scrollView1}>
            {/*<View style={styles.headerContainer}>
              <Text style={styles.headerText}>Details</Text>
            </View>*/}
            <View style={{height: 40}}></View>
            <DistanceComponent />
            <PriceComponent />
            <View style={styles.detailsContainer}>
              <View style={styles.detailsHeaderContainer}>
                <Text style={styles.detailsHeader}>Categories</Text>
              </View>
              <View style={styles.flexRow}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={null}
                  style={styles.categoriesButton}>
                  <Text style={styles.categoriesButtonText}>7 of 7 selected</Text>
                  <Text style={styles.categoriesButtonText}></Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: 20}}></View>
          </ScrollView>
        </View>
        <Animated.View style={[styles.popupScreen, !this.state.popupActive && styles.heightZero , {
                        opacity: popupAnim,
                        transform: [{
                          translateY: popupAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0],
                          }),
                        }],
                      }]}>            
          <View style={styles.popupContainer}>
            <View style={styles.detailsContainer2}>
              <View style={styles.detailsHeaderContainer2}>
                <Text style={styles.detailsHeader}>Categories</Text>
                <TouchableOpacity onPress={null}><Text style={styles.detailsHeader2}>&darr;</Text></TouchableOpacity>
              </View>
              <View style={styles.scrollViewContainer2Inner}>
                <ScrollView style={styles.scrollViewContainer1}>
                  <View style={{height: 20}}></View>
                  <View style={styles.categoryButtonsContainer}>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>American</CategoryButton>
                    </View>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>Brazilian</CategoryButton>
                    </View>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>Cambodian</CategoryButton>
                    </View>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>Dutch</CategoryButton>
                    </View>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>European</CategoryButton>
                    </View>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>French</CategoryButton>
                    </View>
                    <View style={styles.categoryButtonRow}>
                      <CategoryButton>Greek</CategoryButton>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </Animated.View>
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

  scrollViewContainer1: {
    flex: 1,
    flexDirection: 'column',
  },

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

  popupScreen: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0, 
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },

  heightZero: {
    height: 0,
  },

  scrollViewContainer2Inner: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flex: 1,
  },

  scrollView1: {
    flex: 1,
    paddingHorizontal: 20,
  },

  popupContainer: {
    flex: 1,
    padding: 20,
  },

  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },

  detailsContainer2: {
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#FFFF00',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    flex: 1,
    overflow: 'hidden',
  },

  detailsHeaderContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  detailsHeader2: {
    fontWeight: '200',
    fontSize: 22,
    paddingBottom: 20,
    color: '#616161',
  },

  flexRow: {
    flexDirection: 'row',
  },

  categoriesButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6600CC',
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoriesButtonText: {
    fontSize: 18,
    color: '#6600CC',
    fontWeight: '300',
  },

  categoryButtonsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  categoryButtonRow: {
    flexDirection: 'row',
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)
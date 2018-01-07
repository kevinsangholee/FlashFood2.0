import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RestaurantComponent from '../components/RestaurantComponent'

class ResultScreen extends Component {

  state = {
    resultAnim: new Animated.Value(0),
    button1Anim: new Animated.Value(0),
    button2Anim: new Animated.Value(0),
    button3Anim: new Animated.Value(0),
  }

  resultAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.resultAnim,
          {
            toValue: 1,
            duration: 700,
            delay: 300,
          }
        ),
        Animated.timing(
          this.state.button1Anim,
          {
            toValue: 1,
            duration: 500,
            delay: 200,
            easing: Easing.elastic(1),
          }
        ),
        Animated.timing(
          this.state.button2Anim,
          {
            toValue: 1,
            duration: 500,
            delay: 100,
            easing: Easing.elastic(1),
          }
        ),
        Animated.timing(
          this.state.button3Anim,
          {
            toValue: 1,
            duration: 500,
            delay: 0,
            easing: Easing.elastic(1),
          }
        ),
      ]),
    ]).start();
  }

  render() {

    const { finishedLoading, resultAnimation } = this.props
    let { resultAnim, button1Anim, button2Anim, button3Anim } = this.state;


    return (
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.resultContainer, {
                        shadowOpacity: resultAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 0.2],
                        }),
                      }]}>
          { finishedLoading && this.resultAnimation() }
          { !finishedLoading ? <ActivityIndicator size="large" color='#6600CC'/> : <RestaurantComponent ref={(element) => this.restaurantComp = element} />}
        </Animated.View>
        <View style={styles.buttonsContainer}>
          <Animated.View style={[styles.resultbutton1Container, {
                          opacity: button1Anim,
                          transform: [{
                            translateY: button1Anim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [50, 0],
                            }),
                          }]
                        }]}>
            <TouchableOpacity 
              style={styles.resultButton1}
              activeOpacity={0.5}>
              <Text style={styles.resultButtonText1}>&#9881;</Text>
            </TouchableOpacity>
          </Animated.View>
          {/*<Animated.View style={[styles.resultbutton1Container, {
                          opacity: button2Anim,
                          transform: [{
                            translateY: button2Anim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [50, 0],
                            }),
                          }]
                        }]}>
            <TouchableOpacity 
              style={styles.resultButton1}
              activeOpacity={0.5}>
              <Text style={styles.resultButtonText1}>&#9825;</Text>
            </TouchableOpacity>
          </Animated.View>*/}
          <Animated.View style={[styles.resultbutton2Container, {
                          opacity: button2Anim,
                          transform: [{
                            translateY: button2Anim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [50, 0],
                            }),
                          }]
                        }]}
                        onPress={this.restaurantComp.restaurantReset()}>
            <TouchableOpacity 
              style={styles.resultButton2}
              activeOpacity={0.5}>
              <Text style={styles.resultButtonText2}>Next &rarr;</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    finishedLoading: state.results.finishedLoading,
    currentRestaurant: state.results.currentRestaurant,
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
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowOffset: { height: 2 },
    shadowColor: '#000',
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

  resultbutton1Container: {
    flex: 1,
  },

  resultbutton2Container: {
    flex: 3,
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

export default connect(mapStateToProps, null)(ResultScreen)
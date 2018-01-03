import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar, Animated, Easing, Alert } from 'react-native';

export default class HomeScreen extends React.Component {

  state = {
    headerAnim: new Animated.Value(0),
    button1Anim1: new Animated.Value(0),
    button2Anim: new Animated.Value(0),
    button3Anim: new Animated.Value(0),
    button1Anim2: new Animated.Value(0),
    infoPopupAnim: new Animated.Value(0),
    popupActive: false,
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        /*Animated.timing(
          this.state.headerAnim,
          {
            toValue: 1,
            duration: 400,
            delay: 100,
          }
        ),*/
        Animated.timing(
          this.state.button1Anim1,
          {
            toValue: 1,
            duration: 700,
            delay: 100,
            easing: Easing.elastic(1),
          }
        ),
        Animated.timing(
          this.state.button2Anim,
          {
            toValue: 1,
            duration: 700,
            delay: 400,
            easing: Easing.elastic(1),
          }
        ),
        Animated.timing(
          this.state.button3Anim,
          {
            toValue: 1,
            duration: 700,
            delay: 500,
            easing: Easing.elastic(1),
          }
        ),
      ]),
      Animated.timing(
        this.state.button1Anim2,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.bezier(0,1.59,0,1.59),
        }
      ),
    ]).start();
  }

  togglePopupOn = () => {
    this.setState({popupActive: true})
    Animated.sequence([
      Animated.timing(
        this.state.infoPopupAnim,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.elastic(1),
        }
      ),
    ]).start();
  }

  togglePopupOff = () => {
    Animated.sequence([
      Animated.timing(
        this.state.infoPopupAnim,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.elastic(1),
        }
      ),
    ]).start();
    setTimeout(() => {this.setState({popupActive: false})}, 300) 
  }

  render() {

    const { navigation } = this.props;
    let 
    { 
      // Animations
      headerAnim, button1Anim1, button2Anim, button3Anim, button1Anim2, infoPopupAnim,
      // Other
      popupActive,
    } = this.state;

    return (
      <View style={styles.mainContainer}>
        {/*<Animated.View style={[styles.headerContainer, { 
                                    opacity: headerAnim,
                                    transform: [{
                                      translateY: headerAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [10, 0],
                                      }),
                                    }],
                                  }]}>
          <Text style={styles.headerText}>Hungry?</Text>
        </Animated.View>*/}
        <View style={styles.buttonsContainer}>
          <Animated.View style={[styles.buttonContainer, {
                                  opacity: button1Anim1,
                                  transform: [{
                                    translateY: button1Anim1.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [30, 0],
                                    }),
                                  }],
                                  shadowOpacity: button1Anim2.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.7],
                                  }),
                                  shadowRadius: button1Anim2.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 40],
                                  }),
                                }]}>
            <TouchableOpacity
              style={[styles.homeButton1]}
              onPress={() => navigation.navigate('Details', {})}
              activeOpacity={0.5}>
              <Text style={styles.homeButton1Text}>Flash ⚡ Food</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.buttonContainer, {
                                  opacity: button2Anim,
                                  transform: [{
                                    translateY: button2Anim.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [100, 0],
                                    }),
                                  }],
                                }]}>
            <TouchableOpacity
              style={styles.homeButton2}
              //onPress={() => navigation.navigate('Details', {})}
              activeOpacity={0.5}>
              <Text style={styles.homeButton2Text}>Past Restaurants</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.buttonContainer, {
                                  opacity: button3Anim.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [0, 0.8],
                                    }),
                                  transform: [{
                                    translateY: button3Anim.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [100, 0],
                                    }),
                                  }],
                                }]}>
            <TouchableOpacity
              style={styles.homeButton3}
              onPress={this.togglePopupOn}
              activeOpacity={0.5}>
              <Text style={styles.homeButton3Text}>What is this?</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.View style={[styles.popupScreen, !this.state.popupActive && styles.heightZero, 
                              {
                                opacity: infoPopupAnim,
                                transform: [{
                                  translateY: infoPopupAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [100, 0],
                                  })
                                }],
                              }]}>
          <View style={styles.popupContainer}>
            <View style={styles.detailsContainer2}>
              <View style={styles.detailsHeaderContainer2}>
                <Text style={styles.detailsHeader}>Welcome!</Text>
                <TouchableOpacity 
                  onPress={this.togglePopupOff}
                  style={styles.popupToggleOffButton}
                >
                  <Text style={styles.popuptoggleOffButtonText}>&darr;</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText1}>Flash Food decides{"\n"}<Text style={{fontWeight: '300', color: '#6600CC',}}>where to eat</Text>.</Text>
                <View style={styles.infoDivider}></View>
                <Text style={styles.infoText2}><Text style={{fontWeight: '300'}}>You tell us:</Text>{"\n"}Distance, Price, Categories</Text>
                <View style={styles.infoDivider}></View>
                <Text style={styles.infoText2}><Text style={{fontWeight: '300'}}>We tell you:</Text>{"\n"}A random restaurant</Text>
                <View style={styles.infoDivider}></View>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#6600CC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  headerContainer: {
    height: 144,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headerText: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: '200',
    textAlign: 'center',
    letterSpacing: 1,
  },

  orText: {
    marginTop: 20,
    color: '#FFF',
    fontWeight: '200',
    fontSize: 20,
    letterSpacing: 1,
    opacity: 0.8,
  },

  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#FFFF00',
    //shadowOpacity: 0.7,
    shadowRadius: 30,
    marginTop: 6,
  },

  homeButton1:  {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },

  homeButton1Text: {
    color: '#6600CC',
    fontSize: 32,
    fontWeight: '200',
    letterSpacing: 1,
    textAlign: 'center',
  },

  homeButton2:  {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 70,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
  },

  homeButton2Text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 1,
    textAlign: 'center',
  },

  homeButton3:  {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
  },

  homeButton3Text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 1,
    textAlign: 'center',
  },

  popupScreen: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30, 
    left: 0,
    bottom: -30,
    right: 0,
    overflow: 'hidden',
  },

  heightZero: {
    height: 0,
  },

  popupBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000000',
    opacity: 0.9,
  },

  popupContainer: {
    flex: 1,
    padding: 20,
  },

  detailsContainer2: {
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#FFFF00',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFF',
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

  detailsHeader: {
    flex: 1,
    fontWeight: '200',
    fontSize: 22,
    paddingBottom: 20,
    color: '#616161',
  },

  popupToggleOffButton: {
    height: 66, 
    width: 66,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 0, 
    right: 0,
  },

  popuptoggleOffButtonText: {
    fontWeight: '300',
    fontSize: 24,
    height: 28,
    paddingBottom: 20,
    color: '#616161',
    justifyContent: 'center',
  },

  infoContainer: {
    paddingVertical: 10,
  },

  infoText1: {
    fontWeight: '200',
    fontSize: 28,
    textAlign: 'left',
    marginHorizontal: 10,
    marginVertical: 30,
  },

  infoText2: {
    fontWeight: '200',
    fontSize: 22,
    textAlign: 'left',
    marginHorizontal: 10,
    marginVertical: 40,
  },

  infoDivider: {
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
  },

  homeButton4:  {
    flex: 1,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#6600CC',
    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: '#000000',
  },

  homeButton4Text: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '200',
    letterSpacing: 1,
    textAlign: 'center',
  },

});
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Button, TouchableOpacity, StatusBar, Easing } from 'react-native';

export default class HomeScreen extends React.Component {

  state = {
    headerAnim: new Animated.Value(0),
    button1Anim1: new Animated.Value(0),
    orTextAnim: new Animated.Value(0),
    button2Anim: new Animated.Value(0),
    button1Anim2: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.headerAnim,
        {
          toValue: 1,
          duration: 400,
          delay: 500,
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.button1Anim1,
          {
            toValue: 1,
            duration: 600,
            delay: 400,
            easing: Easing.elastic(1),
          }
        ),
        Animated.timing(
          this.state.orTextAnim,
          {
            toValue: 1,
            duration: 600,
            delay: 800,
            easing: Easing.elastic(1),
          }
        ),
        Animated.timing(
          this.state.button2Anim,
          {
            toValue: 1,
            duration: 600,
            delay: 850,
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

  render() {

    const { navigation } = this.props;
    let { headerAnim, button1Anim1, orTextAnim, button2Anim, button1Anim2 } = this.state;

    return (
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.headerContainer, { 
                                opacity: headerAnim,
                                transform: [{
                                  translateY: headerAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [10, 0],
                                  }),
                                }],
                              }]}>
          <Text style={styles.headerText}>Hungry?</Text>
        </Animated.View>
        <View style={styles.buttonsContainer}>
          <Animated.View style={[styles.buttonContainer, {
                                  opacity: button1Anim1,
                                  transform: [{
                                    translateY: button1Anim1.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [40, 0],
                                    }),
                                  }],
                                  shadowOpacity: button1Anim2.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.7],
                                  }),
                                  shadowRadius: button1Anim2.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 20],
                                  }),
                                }]}>
            <TouchableOpacity
              style={[styles.homeButton1]}
              onPress={() => navigation.navigate('Result', {})}
              activeOpacity={1}>
              <Text style={styles.homeButton1Text}>Flash ⚡ Food</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Text style={[styles.orText, {
                          opacity: orTextAnim,
                          transform: [{
                            translateY: orTextAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [80, 0],
                            }),
                          }],
                        }]}>
            OR
          </Animated.Text>
          <Animated.View style={[styles.buttonContainer, {
                                  opacity: button2Anim,
                                  transform: [{
                                    translateY: button2Anim.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [80, 0],
                                    }),
                                  }],
                                }]}>
            <TouchableOpacity
              style={styles.homeButton2}
              onPress={() => navigation.navigate('Customization', {})}
              activeOpacity={1}>
              <Text style={styles.homeButton2Text}>Customized Search</Text>
            </TouchableOpacity>
          </Animated.View>
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
    justifyContent: 'center',
    padding: 10,
  },

  headerContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'transparent',
  },

  buttonsContainer: {
    flex: 0.6,
    alignItems: 'center',
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
    marginTop: 14,
    padding: 20,
    backgroundColor: '#6600CC',
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

});
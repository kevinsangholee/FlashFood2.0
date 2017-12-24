import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state={buttonText: 'GET STARTED'};
  }

  myPress = () => {
    this.setState( {
      buttonText: 'PRESSED BITCH'
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.buttonStandard, styles.depth1]}
          onPress={() => navigate('Categories', {})}>
          <Text style={styles.buttonStandardText}>{this.state.buttonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  depth1: {
    shadowOffset:{  width: 0,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 8
  },

  container: {
    flex: 1,
    backgroundColor: '#C39BD3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStandardText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '200',
    letterSpacing: 3,
  },

  buttonStandard:  {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    padding: 20,
    backgroundColor: '#6600CC',
    borderRadius: 5,
  },

});
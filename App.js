import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

class TouchableButton extends Component {
  state={
    status: "Unpressed"
  }
  myPress = () => {
    this.setState({
      status: "Pressed"
    });
  }
  render() {
    return (
        <Text>{this.state.status}</Text>
      );
  }
}

export default class App extends React.Component {

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
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.buttonStandard, styles.depth1]}
          onPress={this.myPress}>
          <Text style={styles.buttonStandardText}>{this.state.buttonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  depth0: {
    
  },

  depth1: {
    shadowOffset:{  width: 0,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 8
  },

  depth2: {
    
  },

  depth3: {
    
  },

  depth4: {
    
  },

  depth5: {
    
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
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
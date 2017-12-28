import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class PriceButton extends Component {

  state = {
    pressed: true,
  }

  myOnPress = () => {
    this.setState({pressed: !this.state.pressed})
  }

  render() {
    const {children} = this.props;

    return (
      <TouchableOpacity 
        style={[styles.buttonContainer, this.state.pressed && styles.pressedContainer]}
        onPress={this.myOnPress}
        activeOpacity={1}
      >
        <Text
          style={[styles.categoryText, this.state.pressed && styles.pressedText]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

	buttonContainer: {
    marginVertical: 6,
    marginHorizontal: 3,
    borderColor: '#6600CC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    backgroundColor: '#FFF',
  },

  categoryText: {
    color: '#6600CC',
    fontWeight: '300',
    fontSize: 22,
    textAlign: 'left',
    letterSpacing: 1,
    textDecorationLine: 'line-through',
    textDecorationColor: '#6600CC',
  },

  pressedContainer: {
    backgroundColor: '#6600CC',
    shadowOffset: { height: 1, width: 1},
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  pressedText: {
    color: '#FFF',
    textDecorationLine: 'none',
  },

});
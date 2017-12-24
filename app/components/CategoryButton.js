import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class CategoryButton extends Component {

  state = {
    pressed: false,
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
          {children}&nbsp;
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
    flex: 1,
    margin: 6,
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#FFF',
    shadowColor: '#FFFF00',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  categoryText: {
    color: '#6600CC',
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'left',
    letterSpacing: 1,
  },

  pressedContainer: {
    borderColor: '#FFF',
    backgroundColor: 'transparent'
  },

  pressedText: {
    color: '#FFF',
    textDecorationLine: 'line-through',
    textDecorationColor: '#FFF',
  },
});
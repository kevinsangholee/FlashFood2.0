import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

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
      <TouchableHighlight 
        style={[styles.buttonContainer, this.state.pressed && styles.pressedContainer]}
        onPress={this.myOnPress}
        underlayColor='#8E44AD'
        activeOpacity={0.8}
      >
        <Text
          style={[styles.categoryText, this.state.pressed && styles.pressedText]}
        >
          {this.state.pressed ? children : 'Not pressed'}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
    flex: 0.5,
    margin: 2,
    borderColor: '#FFF',
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedContainer: {
    borderColor: '#F7DC6F',
  },
  pressedText: {
    color: '#F7DC6F'
  },
  categoryText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
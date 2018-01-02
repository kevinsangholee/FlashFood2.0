import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { setCategories } from '../actions'
import { connect } from 'react-redux'

class CategoryButton extends Component {

  state = {
    pressed: false,
  }

  render() {
    const { children, setCategories } = this.props;

    return (
      <TouchableOpacity 
        style={[styles.buttonContainer, this.state.pressed && styles.pressedContainer]}
        onPress={() => {
          this.setState({pressed: !this.state.pressed})
          setCategories(children)
        }}
        activeOpacity={0.5}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (category) => {
      dispatch(setCategories(category))
    }
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
    flex: 1,
    margin: 5,
    borderColor: '#6600CC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#6600CC',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },

  categoryText: {
    color: '#FFF',
    fontWeight: '200',
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: 1,
  },

  pressedContainer: {
    borderColor: '#6600CC',
    backgroundColor: 'transparent'
  },

  pressedText: {
    color: '#6600CC',
    textDecorationLine: 'line-through',
    textDecorationColor: '#6600CC',
  },
});

export default connect(null, mapDispatchToProps)(CategoryButton)
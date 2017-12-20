import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={ buttonText: 'FIND FOOD' };
  }

  myPress = () => {
    this.setState(previousState => {
      if (previousState.buttonText == 'FOOD FLASHED') {
        return { buttonText: 'FIND FOOD' }
      } else {
        return { buttonText: 'FOOD FLASHED' }
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} backgroundColor='#6600CC'>
        <TouchableOpacity
          style={[styles.buttonStandard, styles.depth1]}
          onPress={() =>
            navigate('GetStarted')
          }
          activeOpacity={0.9}>
          <Text style={styles.buttonStandardText}>{this.state.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class GetStartedScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#FFFF00'}}>
        <View>
          <View style={{height: 100, flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', margin: 10}}>
            <Text>
              Here's ur fuckin food bitch
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    }) 
  },
  GetStarted: { 
    screen: GetStartedScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }}, { 
    headerMode: 'screen' 
});

export default App;

const styles = StyleSheet.create({

  // MAIN PURPLE: #6600CC
  // BACKGORUND PURPLE: #CC99FF
  // DARK PURPLE: #6633CC
  // MAIN YELLOW: ##FFFF00
  // BACKGROUND YELLOW: #FFFF99

  depth0: {
    
  },

  depth1: {
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#FFFF99',
    shadowOpacity: 1,
    shadowRadius: 25
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
    color: '#000000',
    fontSize: 30,
    fontWeight: '300',
    letterSpacing: 3,
  },

  buttonStandard:  {
    marginRight: 40,
    marginLeft: 40,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#6600CC',
  },

});
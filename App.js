import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import masterReducer from './app/reducers'
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import HistoryScreen from './app/screens/HistoryScreen';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native'

const Navigator = TabNavigator({
	Details: { screen: DetailsScreen },	
  Result: { screen: ResultScreen },
  History: { screen: HistoryScreen}
}, {
	//initialRouteName: 'Result',
	tabBarPosition: 'top',
	swipeEnabled: true,
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#6600CC',
		showLabel: false,
		style: { 
			backgroundColor: 'transparent',
			height: 70,
			paddingTop: 16,
		},
	},
});

const store = Reactotron.createStore(masterReducer, applyMiddleware(thunk))

class App extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<Navigator />
			</Provider>
		)
	}
}

export default App;
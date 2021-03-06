import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import masterReducer from './app/reducers'
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native'

const Navigator = StackNavigator({
  Home: { screen: HomeScreen, },
  Result: { screen: ResultScreen },
  Details: { screen: DetailsScreen },
}, {headerMode: 'none'});

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

import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import masterReducer from './app/reducers'
import CategoriesScreen from './app/screens/CategoriesScreen';
import HomeScreen from './app/screens/HomeScreen';
import ResultScreen from './app/screens/ResultScreen';
import CustomizationScreen from './app/screens/CustomizationScreen';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen, },
  Customization: { screen: CustomizationScreen },
  Categories: { screen: CategoriesScreen },
  Result: { screen: ResultScreen },
}, {headerMode: 'none'});

let store = createStore(masterReducer)

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



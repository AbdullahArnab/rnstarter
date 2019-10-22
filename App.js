import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ComponentScreen from './src/screens/componentsScreen';
import HomeScreen from './src/screens/homeComponent'


const navigator = createStackNavigator(
	{
		Home: {screen: HomeScreen},
		Component: {screen: ComponentScreen}
	}
);

export default createAppContainer(navigator);



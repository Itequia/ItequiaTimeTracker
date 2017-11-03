import {
	StackNavigator,
} from 'react-navigation'

import LoginScreen from "./login-screen"
import HomeScreen from "./home-screen"
import EntryScreen from "./entry-screen"

export default StackNavigator({
	Login: { screen: LoginScreen },
	Entry: { screen: EntryScreen },
	Home: { screen: HomeScreen }
	
})
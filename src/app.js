import {
	StackNavigator,
} from 'react-navigation'

import LoginScreen from "./login-screen"
import HomeScreen from "./home-screen"
import EntryScreen from "./entry-screen"

export default StackNavigator({
	Login: { screen: LoginScreen },
	Home: { screen: HomeScreen },
	Entry: { screen: EntryScreen }
})
import {
	StackNavigator,
} from 'react-navigation'

import LoginScreen from "./login-screen"
import HomeScreen from "./home-screen"

export default StackNavigator({
	Login: { screen: LoginScreen },
	Home: { screen: HomeScreen },
})
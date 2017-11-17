import {
	StackNavigator,
} from 'react-navigation'

import LoginScreen from "./login-screen"
import HomeScreen from "./home-screen"

const Authorized = StackNavigator({
	Home: { screen: HomeScreen },
	// Detail screen
})

export const createRootNavigator = (isSignedIn = false) =>  {
	return StackNavigator(
		{ 
			Unauthorized: {
				screen: LoginScreen,
				navigationOptions: {
					gesturesEnabled: false
				}
			},
			Authorized: {
				screen: Authorized,
				navigationOptions: {
					gesturesEnabled: false
				}
			}
		},
		{
			headerMode: "none",
			mode: "modal",
			initialRouteName: isSignedIn ? "Authorized" : "Unauthorized"
		}
	)
}
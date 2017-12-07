import {
	StackNavigator,
} from 'react-navigation'
import {
  AppRegistry,
} from 'react-native';
import LoginScreen from "./login-screen"
import HomeScreen from "./home/home-screen"
import EntryScreen from "./entry/entry-screen"

const Authorized = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
		title: 'Home',
	}
  },
  Entry: {
    screen: EntryScreen,
    navigationOptions: {
		title: 'Entry',
	}
  }
});

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
			},
		},
		{
			headerMode: "none",
			mode: "modal",
			initialRouteName: isSignedIn ? "Authorized" : "Unauthorized"
		}
	)
}

AppRegistry.registerComponent('Authorized', () => Authorized);
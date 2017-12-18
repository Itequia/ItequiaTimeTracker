import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Alert
} from 'react-native'

import AuthService from "./services/auth.service"
import Api from "./services/api.service"

const INVALID_PASSWORD_TITLE = 'Invalid Password'
const INVALID_PASSWORD_MESSAGE = 'The password is not correct'

export default class LoginScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			username: '',
			password: ''
		}
	}

	logIn() {
		if (!Api.isValidPassword(this.state.password)) {
			return Alert.alert(INVALID_PASSWORD_TITLE, INVALID_PASSWORD_MESSAGE)
		}
		AuthService.onLogIn("token")
			.then(() => this.props.navigation.navigate("Authorized"))
	}

	render() {
		const pic = {
			uri: 'https://res.cloudinary.com/itequia/image/upload/v1507637655/logoGrey.png'
		}
		
		return (
			<View style={ styles.loginView }>		
				<View style={ styles.container }>
					<Image source={pic} style={ styles.logo } />
					<Text style={ styles.subtitle }>
						[TIME TRACKER]
					</Text>
					<TextInput
						style={ styles.textInput }
						placeholder="Username"
						onChangeText={(text) => this.setState({ username: text })}
					/>
					<TextInput
						style={ styles.textInput }
						placeholder="Password"
						onChangeText={(text) => this.setState({ password: text })}
					/>
					<View style={ styles.loginButtonContainer }>
					<Button
						style={ styles.loginButton }
						onPress={ () => this.logIn() }
						disabled={ this.state.username == '' || this.state.password == '' }
						title="Log in"
					/>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	loginView: {
		flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	subtitle: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: 'center',
		marginTop: -20,		
		marginBottom: 10,
	},
	logo: { 
		height: 140,
		width: 250
	},
	textInput: {
		height: 40,
		width: 250,
		marginTop: 30 
	},
	loginButtonContainer: {
		width: 200, 
		height: 200
	},
	loginButton: {
		backgroundColor: 'powderblue'
	}
})

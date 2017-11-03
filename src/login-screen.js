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

const CORRECT_PASSWORD = 'Itequia2008'

export default class LoginScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			username: '',
			password: '',
			modalVisible: false
		}
	}
	
	static navigationOptions = {
		title: 'Login',
	}
	isValidPassword = (password) => password === CORRECT_PASSWORD

	render() {
		const INVALID_PASSWORD_TITLE = 'Invalid Password'
		const INVALID_PASSWORD_MESSAGE = 'The password is not correct'
		
		const pic = {
			uri: 'https://res.cloudinary.com/itequia/image/upload/v1507637655/logoGrey.png'
		}
		const { navigate } = this.props.navigation
		
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
						disabled={ this.state.username == '' || this.state.password == '' }
						onPress={ () => 
							this.isValidPassword(this.state.password) ? 
								navigate('Home') : Alert.alert(INVALID_PASSWORD_TITLE, INVALID_PASSWORD_MESSAGE)
						}
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

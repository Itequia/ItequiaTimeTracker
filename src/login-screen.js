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

export default class LoginScreen extends Component {

	static navigationOptions = {
		title: 'Login',
	}

	render() {
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
						onChangeText={(text) => this.setState({text})}
					/>
					<View style={ styles.loginButtonContainer }>
					<Button
						style={ styles.loginButton }
						onPress={ () =>
							navigate('Home')
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

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Alert
} from 'react-native'

export default class App extends Component<{}> {
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
						onChangeText={(text) => this.setState({text})}
					/>
					<View style={ styles.loginButtonContainer }>
						<Button
							style={ styles.loginButton }
							onPress={() => { Alert.alert('You tapped the button!')}}
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
		width: 200, 
		height: 110,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	textInput: {
		height: 40,
		width: 200
	},
	loginButtonContainer: {
		width: 200, 
		height: 200
	},
	loginButton: {
		backgroundColor: 'powderblue'
	}
})

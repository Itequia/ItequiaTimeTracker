/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	render() {
		const pic = {
			uri: 'https://res.cloudinary.com/itequia/image/upload/v1507637655/logoGrey.png'
		}
		return (
			<View style={ styles.container }>
				<Image source={pic} style={ styles.logo } />
				<Text style={ styles.subtitle }>
					[TIME TRACKER]
				</Text>
				<Text style={ styles.instructions }>
					Per començar, edita App.js
				</Text>
				<Text style={ styles.instructions }>
					{ instructions }
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
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
		width: 193, 
		height: 110,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

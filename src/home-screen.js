
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Home',
	}

	constructor(props) {
		super(props)
		this.state = { 
			startDate: new Date(),
			displayDate: 0
		}
	}

	componentDidMount() {
		this.timerInterval = setInterval(
			() => this.tick(),
			1000
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerInterval)
	}

	tick() {
		this.setState({
			displayDate: new Date() - this.state.startDate
		})
	}

	render() {
		const { displayDate } = this.state
		const seconds = Math.floor(displayDate / 1000)
		
		return (
			<View style={ styles.view }>
				<Text style={ styles.text }>
					00  : { seconds }
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		paddingTop: 50,
		alignItems: 'center',
	},
	text: {
		fontSize: 40,
		color: "black"
	}
})
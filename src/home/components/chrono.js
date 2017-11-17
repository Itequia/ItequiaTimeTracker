import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native'

export default class HomeScreen extends Component {
	
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

	getTimeFormatted() {
		const { displayDate } = this.state
		
		let seconds = Math.floor(displayDate / 1000)
		let minutes = Math.floor(seconds / 60)
		let hours = Math.floor(minutes / 60)
		
		seconds -= 60 * minutes
		minutes -= 60 * hours

		let timeString = hours ? `${ hours }h ` : ""
		timeString += minutes ? `${ minutes }m ` : ""
		timeString += `${ seconds }s`
		return timeString
	}
	
	render() {

		return (
			<View style={ styles.view }>
				<Text style={ styles.text }>
					{ this.getTimeFormatted() } 
				</Text>
				<View style={ styles.buttonContainer }>
					<Button
						onPress={ () => console.log("start") }
						title="Start"
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
	},
	text: {
		fontSize: 70,
		color: "gray"
	},
	buttonContainer: {
		width: 250
	}
})
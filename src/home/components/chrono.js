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
			displayDate: 0,
			running: false
		}
	}
	
	componentDidMount() {
		//TODO: llamada a la api para saber si hay algún record corriendo
	}
	
	componentWillUnmount() {
		this.stopCrono()
	}
	
	tick() {
		console.log('tick')
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
	
	initRecord() {
		//TODO: llamada a la api, si todo va bien hacer lo siguiente:
		this.setState({ running: true })
		this.initCrono()
		//TODO: pop-up
	}

	initCrono() {
		console.log('entra')
		this.setState({ startDate: new Date() })
		this.timerInterval = setInterval(
			() => this.tick(),
			1000
		)
	}

	stopRecord() {
		//TODO: llamada a la api, si todo va bien hacer lo siguiente:
		this.setState({ running: false })
		this.stopCrono()
		//TODO: pop-up
	}

	stopCrono() {
		clearInterval(this.timerInterval)
	}

	render() {
		if(this.state.running)
			return (
				<View style={ styles.view }>
					<Text style={ styles.text }>
						{ this.getTimeFormatted() } 
					</Text>
					<View style={ styles.buttonContainer }>
						<Button
							onPress={ () => this.stopRecord() }
							title="Stop"
						/>
					</View>
				</View>
			)
		else
			return (
				<View style={ styles.view }>
					<Text style={ styles.text }>
						{ this.getTimeFormatted() } 
					</Text>
					<View style={ styles.buttonContainer }>
						<Button
							onPress={ () => this.initRecord() }
							title="Play"
						/>
					</View>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center'
	},
	text: {
		fontSize: 70,
		color: "gray"
	},
	buttonContainer: {
		width: 250
	}
})

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native'

import Chrono from "./components/chrono"
import RecordList from './components/record-list'

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
		return (
			<View style={ styles.view }>
				<Chrono style={ styles.chrono }/>
				<View style={ styles.recordList }>
					<RecordList></RecordList>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10
	},
	chrono: {
		alignSelf: 'stretch',
		flex: .2,
	},
	recordList: {
		alignSelf: 'stretch',
		flex: .7,
	}
})

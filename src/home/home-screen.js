
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

		const { navigate } = this.props.navigation

		return (
			<View style={ styles.view }>
				<Chrono 
				style={ styles.chrono }
				onNavigate= {() => navigate('Entry')}
				/>
				<View style={ styles.head }>
					<Text >Cabecera</Text>			
				</View>
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
	head: {
		alignSelf: 'stretch',
		flex: .1,
	},
	recordList: {
		alignSelf: 'stretch',
		flex: .7,
	}
})

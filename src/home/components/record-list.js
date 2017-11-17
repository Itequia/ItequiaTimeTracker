
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

import RecordListItem from './record-list-item'

export default class ChronoList extends Component {

	constructor(props) {
		super(props)
	}

	render() {
        return(
			<View style={ styles.list }>
				<RecordListItem></RecordListItem>
				<RecordListItem></RecordListItem>
			</View>
        )
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1
	}
})
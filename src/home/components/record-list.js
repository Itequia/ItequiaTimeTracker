
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	SectionList,
} from 'react-native'

import RecordListItem from './record-list-item'

export default class ChronoList extends Component {

	constructor(props) {
		super(props)
	}

	render() {
        return(
			<View style={ styles.list }>
				<SectionList
					renderItem={ ({item}) => <Text >{item}</Text> }
					renderSectionHeader={ ({section}) => <Text >{section.title}</Text> }
					sections={[
						{ data: ["a", "b", "c"], title: "Octubre" },
						{ data: ["d", "e", "f"], title: "Noviembre" },
						{ data: ["g", "h", "i"], title: "Diciembre" },
					]}
				/>
			</View>
        )
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1
	}
})
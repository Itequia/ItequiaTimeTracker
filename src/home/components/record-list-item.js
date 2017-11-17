
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default class RecordListItem extends Component {
    
	constructor(props) {
        super(props)
	}

	render() {
        const { record } = this.props
		return (
            <View style={ styles.global }>
                <View style={ styles.view }>
                    <View style={ styles.info }>
                        <Text style={ styles.project }>
                            { record.project }
                        </Text>
                        <Text style={ styles.description }>
                            { record.description }
                        </Text>
                    </View>
                    <View style={ styles.counterVertical }>
                        <View style={ styles.counter }>
                            <View>
                                <Text style={ styles.time }>
                                    { record.startDate }
                                </Text>                                        
                            </View>
                            <View>
                                <Text>
                                    button
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View> 
		)
	}
}

const styles = StyleSheet.create({
    global: {
        height: 60
    },
	view: {
		flex: 1,
        flexDirection: 'row'
    },
    info: {
        flex: 1,
        justifyContent: 'center'
    },
	project: {
		fontWeight: 'bold'
    },
    description: {},
    counterVertical: {
        flex: 1
    },
    counter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    time: {
        fontSize: 30
    }
})
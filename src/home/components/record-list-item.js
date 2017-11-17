
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default class RecordListItem extends Component {
    
	constructor(props) {
        super(props)
        this.state = {
            project: {
                id: 1,
                text: "project"
            },
            description: "description",
            startDate: new Date(),
            endDate: new Date(),
            duration: '01:00'
        }
	}

	render() {
		return (
            <View style={ styles.global }>
                <View style={ styles.view }>
                    <View style={ styles.info }>
                        <Text style={ styles.project }>
                            { this.state.project.text }
                        </Text>
                        <Text style={ styles.description }>
                            { this.state.description }
                        </Text>
                    </View>
                    <View style={ styles.counterVertical }>
                        <View style={ styles.counter }>
                            <View>
                                <Text style={ styles.time }>
                                    { this.state.duration }
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
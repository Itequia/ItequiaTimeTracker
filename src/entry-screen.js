import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
} from 'react-native'

import ProjectSelector from './project-selector'

const Item = Picker.Item;

export default class EntryScreen extends Component {

	static navigationOptions = {
		title: 'Entry',
	}

	constructor(props) {
		super(props)
		this.state = { 
			projects: [],
			selected: null,
			description: '',
			tags: ''
		}
	}

	componentDidMount() {
		this.state.projects = this.getProjects()
	}

	getProjects() {
		this.setState({
			projects: ['Tekman', 'OhLibro', 'Celsa'],
			selected: 'OhLibro'
		})
	}

	onProjectChange(key, value) {
		const newState = {};
	    newState[key] = value;
	    this.setState(newState);
	}

	render() {
		return (
		  <View style={styles.container}>
		  	<View>
		  		<Text
		  			style={styles.label}>Description:
		  		</Text>
		    	<TextInput 
		    		onChangeText={this.onProjectChange.bind(this, 'description')}
		    		placeholder="What are you doing?" 
		    		style={styles.input} 
		    	/>
		  	</View>
		  	<View>
		  		<Text style={styles.label}>Tags:</Text>
		    	<TextInput 
		    		placeholder="Tags (comma separated)" 
		    		style={styles.input} 
		    		onChangeText={this.onProjectChange.bind(this, 'tags')}
		    	/>
		  	</View>
		  	<ProjectSelector></ProjectSelector>

		  </View>
		)
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {
  	flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30
  },
  input: {
    height: 37,
    width: 250
  },
  label: {
  	color: '#00adc6',
  	left: 0,
  	fontSize: 10
	}
})
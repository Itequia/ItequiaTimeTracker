import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
  TimePickerAndroid,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native'
import ProjectSelector from '../shared/project-selector'
import Api from "../services/api.service"

const Item = Picker.Item

export default class EntryScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			selected: null,
			description: '',
			tags: '',
			startDate: null,
		    endDate: null,
		    loadingProjects: true
		}
	}

	onProjectsLoaded() {
		this.setState({loadingProjects: false})
	}

	onProjectChange(key, value) {
	    this.setState({ [key]: value })
	}

	async submitEntry() {
		let response = await Api.saveRecord()
		this.props.navigation.navigate("Home")
	}

	async openTimePicker(key) {
		try {
		  const {action, hour, minute} = await TimePickerAndroid.open({
		    hour: 14,
		    minute: 0,
		    is24Hour: false
		  });
		  if (action !== TimePickerAndroid.dismissedAction) {
		   this.onProjectChange(key, `${hour}:${minute}`)
		  }
		} catch ({code, message}) {
		  console.warn('Cannot open time picker', message);
		}
	}

	render() {
		return (
		  <View style={styles.container}>
		  	<View style={styles.buttonsContainer}>
			  	<Button
			  	  onPress={this.openTimePicker.bind(this, 'startDate')}
			  	  title={this.state.startDate || 'Start Date'}
			  	  color="#00ADC6"
			  	/>
			  	<Button
			  	  onPress={this.openTimePicker.bind(this, 'endDate')}
			  	  title={this.state.endDate || 'End Date'}
			  	  color="#00ADC6"
			  	/>
		  	</View>
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
		  	<ProjectSelector 
		  		onProjectChange={this.onProjectChange.bind(this, 'selected')}
		  		projectsLoaded={this.onProjectsLoaded.bind(this)}
		  		/>
		  	<View style={styles.saveButtonContainer}>
			  	<Button
			  	  onPress={this.submitEntry.bind(this)}
			  	  title='Save'
			  	  color="#449D44"
			  	  style={styles.saveButton}
			  	  disabled={this.state.loadingProjects}
			  	/>
			  	
		  	</View>
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
  buttonsContainer: {
  	justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'stretch'
  },
  saveButtonContainer: {
    marginTop: 20,
	width: 200, 
  },
  input: {
    height: 37,
    width: 250
  },
  label: {
  	color: '#00adc6',
  	left: 0,
  	fontSize: 10
  },
  picker: {
  	color: 'grey',
    width: 250,
    height: 37,
  },
})
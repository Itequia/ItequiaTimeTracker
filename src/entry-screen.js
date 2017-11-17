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
			tags: '',
			startDate: null,
		    endDate: null
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
		  	<View>
		  		<Text style={styles.label}>Project:</Text>
		  		<View style={styles.pickerView}>
		  			<Picker
		  				style={styles.picker}
		  				selectedValue={this.state.selected}
		  				onValueChange={this.onProjectChange.bind(this, 'selected')}
		  				mode="dialog">
		  				{
		  					this.state.projects.map(project => (
		  						<Item
		  							style={styles.itemStyle}
		  							key={project} 
		  							label={project} 
		  							project={project} 
		  							value={project} 
		  						/>
		  					))
		  				}
		  			</Picker>
		  		</View>
		  	</View>
		  	<View style={styles.saveButtonContainer}>
			  	<Button
			  	  onPress={this.openTimePicker.bind(this, 'startDate')}
			  	  title='Save'
			  	  color="#449D44"
			  	  style={styles.saveButton}
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
  itemStyle: {
    fontSize: 10,
    height: 35
  },
  pickerView: {
  	borderBottomColor: 'grey',
	borderBottomWidth: 1
  },
  picker: {
  	color: 'grey',
  	fontSize: 5,
    width: 250,
    height: 37,
    textAlign: 'left'
  },
})
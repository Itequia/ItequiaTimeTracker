import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Alert,
	Picker
} from 'react-native'

const Item = Picker.Item;
export default class ProjectSelector extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			projects: false
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
			<View style={styles.pickerView}>
	  			<Picker
	  				style={styles.picker}
	  				selectedValue={this.state.selected}
	  				onValueChange={this.onProjectChange.bind(this, 'selected')}
	  				mode="dialog">
	  				{
	  					this.state.projects 
	  					? this.state.projects.map(project => (
	  						<Item
	  							style={styles.itemStyle}
	  							key={project} 
	  							label={project} 
	  							project={project} 
	  							value={project} 
	  						/>
	  					 ))
	  					: null
	  				}
	  			</Picker>
	  		</View>
		)
	}
}

const styles = StyleSheet.create({
	  itemStyle: {
	    fontSize: 10,
	    height: 35
	  },
	  pickerView: {
	  	borderBottomColor: 'grey',
		borderBottomWidth: 1
	  },
})

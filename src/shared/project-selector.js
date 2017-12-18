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
import Api from "../services/api.service"

const Item = Picker.Item;
export default class ProjectSelector extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			projects: false,
			selected: null,
		    loadingProjects: true
		}
	}

	async componentDidMount() {
		await this.getProjectsFromApi()
	}

	async getProjectsFromApi() {
		try{
			let projects = await Api.getProjects()
			this.setState({
				projects: projects,
				selected: projects[0].id,
				loadingProjects: false
			})
		    this.props.projectsLoaded()
		}
		catch(err) {
			console.log(err);
		}
		
	}

	onProjectChange(key, value) {
	    this.setState({ [key]: value });
	    this.props.onProjectChange(value)
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
	  					!this.state.loadingProjects 
		  					? this.state.projects.map(project => (
		  						<Item
		  							style={styles.itemStyle}
		  							key={project.id} 
		  							label={project.name} 
		  							value={project.id} 
		  						/>
		  					  ))
		  					: <Item
		  							style={styles.itemStyle}
		  							label="Loading..."
		  							value="-1"
		  							key="-1"
		  					/>
	  				}
	  			</Picker>
	  		</View>
		)
	}
}

const styles = StyleSheet.create({
  itemStyle: {
    height: 35
  },
  pickerView: {
  	borderBottomColor: 'grey',
	borderBottomWidth: 1
  },
  picker: {
  	color: 'grey',
    width: 250,
    height: 37,
  },
})
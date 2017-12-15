import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Alert,
	ListView
} from 'react-native'

import ProjectList from './project-list'


export default class ProjectSelector extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			projects: [],
			filteredProjects: [],
			selectedProject: {},
			searchText: ""
		}
	}

	componentDidMount() {
		this.getProjects()
	}

	getProjects = async () => {
		let fakeProjects = await this.getProjectsServer()
		this.setState({
			filteredProjects: fakeProjects,
			projects: fakeProjects,
		})
	}

	onSearch(key, searchText) {
		let lowerCaseSearchText = searchText.toLowerCase()
		this.setState({
			filteredProjects: this.state.projects.filter( p => {
				return p.name.toLowerCase().includes(lowerCaseSearchText)
			}),
			searchText: searchText			
		})
	}

	selectProject(project) {
		console.log(project.name)
		this.setState({
			selectedProject: project,
			searchText: project.name
		})
	}

	//Remove before joining sergio's branch
	getProjectsServer = async () => {
		try {
			let response = await fetch(
				'http://itequia-toggl-api.azurewebsites.net/api' + '/projects'
			)
			let responseJson = await response.json()
			return responseJson
				.filter(project => project.status === 1)
				.map(project => ({
					id: project.id,
					name: project.name
				}))
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.label}>Project:</Text>
					<TextInput 
						placeholder="Project name" 
						style={styles.input} 
						value={this.state.searchText}
						onChangeText={this.onSearch.bind(this, 'searchText')}
					/>
					<ProjectList data={this.state.filteredProjects} 
								selectProject={this.selectProject.bind(this)}>
					</ProjectList>
				</View>
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
	label: {
		color: '#00adc6',
		left: 0,
		fontSize: 10		
	},
	container: {
	  flex: 1,
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	input : {
		width: 250,
		height: 37		
	}
})

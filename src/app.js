import React from "react"
import { createRootNavigator } from "./router"
import AuthService from "./services/auth.service"

export default class App extends React.Component {
  
	constructor(props) {
		super(props)
	
		this.state = {
			isLoading: true,
			isLoggedIn: false
		}
	}
	
	componentWillMount() {
		AuthService.isLoggedIn()
			.then(isLoggedIn => this.setState({ 
				isLoading: false,
				isLoggedIn
			}))
	}
	
	render() {
		const { isLoading, isLoggedIn } = this.state
		if (isLoading) return null 
		const Layout = createRootNavigator(isLoggedIn)
		return <Layout />
	}
}
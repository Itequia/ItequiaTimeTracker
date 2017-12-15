const CORRECT_PASSWORD = 'Itequia2008'
const API_BASE_URL = 'http://itequia-toggl-api.azurewebsites.net/api'
const API_GET_PROJECTS = '/projects'
const API_POST_RECORD = '/projects'

class Api {
    
    isValidPassword = password =>  password === CORRECT_PASSWORD

    getTrackedTime = (id) => { 
        return {
            id: '1',
            project: "Fake Project 1 ",
            description: "Fake Description 1",
            startDate: Date(),
            endDate: Date()
        }
    }

    getProjects = async () => {
        try {
            let response = await fetch(
                API_BASE_URL + API_GET_PROJECTS
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

    saveRecord = async (data) => {
        try {
            let response = await fetch(API_BASE_URL+API_POST_RECORD, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            })
        } catch (error) {
            console.error(error);
        }
        
    }

    getListPreviousTrackedTimes = () => {
        return [
            {
                id: '1',
                project: "Fake Project 1",
                description: "Fake Description 1",
                startDate: Date(),
                endDate: Date()
            },
            {
                id: '2',
                project: "Fake Project 2",
                description: "Fake Description 2",
                startDate: Date(),
                endDate: Date()
            },
            {
                id: '3',
                project: "Fake Project 3",
                description: "Fake Description 3",
                startDate: Date(),
                endDate: Date()
            },
        ] 
    }

    createTrackedTime = timeTracked => {}

    saveTrackedTime = timeTracked => {}

    deleteTrackerTime = id => {}

    getProject = (id) => {
        return {
            id: '1',
            name: "Fake Project 1"
        }
    }

    getListProjects = () => {
        return [
            {
                id: '1',
                name: "Fake Project 1"
            },
            {
                id: '2',
                name: "Fake Project 2"
            },
            {
                id:'3',
                name: "Fake Project 3"
            }]
    }
}

export default new Api()
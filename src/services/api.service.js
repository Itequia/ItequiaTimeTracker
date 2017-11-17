const CORRECT_PASSWORD = 'Itequia2008'

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
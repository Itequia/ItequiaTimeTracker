import { AsyncStorage } from "react-native"

const TOKEN_KEY = "user-token"

 class AuthService {

	onLogIn(token) {
		return AsyncStorage.setItem(TOKEN_KEY, token)
	}

	onLogOut() {
		return AsyncStorage.removeItem(TOKEN_KEY)
	}

	isLoggedIn() {
		return AsyncStorage.getItem(TOKEN_KEY)
			.then(res => res !== null)
			.catch(() => false)
	}
}

export default new AuthService()
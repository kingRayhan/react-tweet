import Token from './class.Token'
import Storage from './class.Storage'
import jwtDecode from 'jwt-decode'
export default class Auth {
    static login(credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post(`api/auth/login`, credentials)
                .then(res => {
                    Token.saveToken(res.data.access_token)
                    resolve(res)
                    window.location.reload()
                })
                .catch(e => reject(e.response.data))
        })
    }

    static logout() {
        axios.post(`api/auth/logout`).then(res => {
            Token.removeToken()
            window.location.reload()
        })
    }

    static update(user_id, newData) {
        return new Promise((resolve, reject) => {
            if (!user_id) return reject('User id not provided')
            axios
                .post(`api/auth/update/${user_id}`, newData)
                .then(({ data }) => {
                    console.log(data)
                    resolve(data)
                })
                .catch(e => reject(e.response))
        })
    }

    static signup(userInfo) {
        // console.log(userInfo)
        return new Promise((resolve, reject) => {
            axios
                .post(`${appUrl}/api/auth/signup`, userInfo)
                .then(res => {
                    console.log(res)
                    resolve(res)
                    Token.saveToken(res.data.access_token)
                    window.location.reload()
                })
                .catch(e => reject(e.response.data))
        })
    }

    static isLoggdin() {
        const token = Token.getToken()
        if (!token) return false
        const decoded = jwtDecode(token)
        const authenticated =
            (decoded.iss === `${appUrl}/api/auth/login` ||
                decoded.iss === `${appUrl}/api/auth/signup`) &&
            token
        if (authenticated) return true
        return false
    }

    static me() {
        return new Promise((resolve, reject) => {
            axios
                .post(`${appUrl}/api/auth/me`)
                .then(({ data: user }) => resolve(user))
                .catch(e => reject(e.response))
        })
    }
}

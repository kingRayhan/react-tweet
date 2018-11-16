import Storage from './class.Storage'
export default class Token {
    static saveToken(token) {
        Storage.storeKey('token', token)
    }
    static getToken() {
        return Storage.getKey('token')
    }
    static removeToken() {
        Storage.clearStorage()
    }
}

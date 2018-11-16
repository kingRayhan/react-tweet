export default class Storage {
    static storeKey(key, value) {
        localStorage.setItem(key, value)
    }
    static getKey(key) {
        return localStorage.getItem(key)
    }
    static clearStorage() {
        localStorage.clear()
    }
}

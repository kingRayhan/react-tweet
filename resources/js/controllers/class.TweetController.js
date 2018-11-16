const resourceBaseUrl = `${appUrl}/api/tweets`

export default class TweetController {
    /**
     * Fetch all tweets
     *
     * @return promise
     */
    static index() {
        return new Promise((resolve, reject) => {
            axios
                .get(resourceBaseUrl)
                .then(({ data: { data: tweets } }) => resolve(tweets))
                .catch(e => reject(e.response))
        })
    }
    /**
     * Store a new tweets
     *
     * @param tweet {object} new tweet object with body
     *
     * @return promise
     */
    static store(tweet) {
        return new Promise((resolve, reject) => {
            if (!tweet) return reject(`tweet data not provided`) // breack here if `tweet` not provided
            axios
                .post(resourceBaseUrl, tweet)
                .then(({ data: { data: tweets } }) => resolve(tweets))
                .catch(e => reject(e.response))
        })
    }

    /**
     * Update a Tweet
     *
     * @param tweet_id {int} tweet_id for which need to be updated
     * @param newData {object} updated tweet object
     *
     * @return promise
     */
    static update(tweet_id, newData) {
        return new Promise((resolve, reject) => {
            if (!tweet_id) return reject(`tweet_id not provided`) // breack here if `tweet_id` not provided
            if (!newData) return reject(`tweet_id not provided`) // breack here if `newData` not provided

            axios // update request send
                .put(resourceBaseUrl + '/' + tweet_id, newData)
                .then(({ data: { data } }) => resolve(data))
                .catch(e => reject(e.response))
        })
    }

    /**
     * Delete a Tweet
     *
     * @param tweet_id {int} tweet_id to delete
     *
     * @return promise
     */
    static destroy(tweet_id) {
        return new Promise((resolve, reject) => {
            if (!tweet_id) return reject(`tweet_id not provided`) // breack here if tweet_id not provided

            axios
                .delete(`${appUrl}/api/tweets/${tweet_id}`)
                .then(res => resolve('Deleted Successfully'))
                .catch(e => reject(e.response))
        })
    }
}

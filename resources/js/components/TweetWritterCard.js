import React, { Component } from 'react'
import TweetController from '../controllers/class.TweetController'
export default class TweetWritterCard extends Component {
    state = { charLimit: 240, tweetText: '', disableTyping: false }

    handleChange = e => {
        const tweetText = e.target.value
        if (tweetText.length > this.state.charLimit) return

        this.setState({
            tweetText,
        })
    }
    saveTweet = e => {
        e.preventDefault()
        TweetController.store({ body: this.state.tweetText })
            .then(d => {
                this.props.fetchTweets()
                this.setState({ errors: [], tweetText: '' })
            })
            .catch(e => {
                const errors = this.state.errors
                errors.push(e.response.data.errors.body[0])
                this.setState({ errors })
            })
    }

    render() {
        return (
            <div className="tweet-writter">
                <textarea
                    ref="tweet_body"
                    onChange={this.handleChange}
                    disabled={this.state.disableTyping}
                    value={this.state.tweetText}
                />
                <button className="app-btn" onClick={this.saveTweet}>
                    Tweet
                </button>
                <span className="charlimit">
                    {this.state.charLimit - this.state.tweetText.length}{' '}
                    character(s) left
                </span>
            </div>
        )
    }
}

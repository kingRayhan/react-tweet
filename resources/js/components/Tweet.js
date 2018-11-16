import React, { Component } from 'react'
import Axios from 'axios'
import TweetController from '../controllers/class.TweetController'
import Auth from '../classes/class.Auth'
export default class Tweet extends Component {
    state = { edit: false, own: false }

    componentDidMount() {
        Auth.me().then(user => {
            if (this.props.tweet.user.id === user.id) {
                this.setState({ own: true })
            }
        })
    }

    updateTweet = () => {
        TweetController.update(this.props.tweet.tweet_id, {
            body: this.refs.body.value,
        }).then(d => {
            this.setState({ edit: false })
            this.props.fetchTweets()
        })
    }
    DeleteTweet = () => {
        if (!confirm('Sure to delete?')) return
        TweetController.destroy(`${this.props.tweet.tweet_id}`).then(d =>
            this.props.fetchTweets()
        )
    }
    cancelEdit = () =>
        this.setState({
            edit: false,
        })

    render() {
        const { tweet_id: id, tweet_body: body } = this.props.tweet
        return (
            <div className="tweet-card">
                <div className="user">{this.props.tweet.user.name}</div>
                {!this.state.edit ? (
                    <React.Fragment>
                        <div className="text">{body}</div>
                        <div className="tweet-card-footer d-flex justify-content-between align-items-center pt-3">
                            <div className="time text-muted">
                                {this.props.tweet.created.ago}
                            </div>
                            {this.state.own && (
                                <div className="controls">
                                    <button
                                        className="btn btn-link text-muted"
                                        onClick={this.DeleteTweet}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-link text-muted"
                                        onClick={() =>
                                            this.setState({
                                                edit: true,
                                            })
                                        }
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="tweet-editor">
                        <textarea
                            class="textarea"
                            defaultValue={body}
                            ref="body"
                        />
                        <div className="buttons">
                            <button
                                className="app-btn"
                                onClick={this.updateTweet}
                            >
                                Update
                            </button>
                            <button
                                className="btn btn-link"
                                onClick={this.cancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

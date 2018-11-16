import React, { Component } from 'react'
import Tweets from './Tweets'
import Errors from './errors'
import TweetController from '../controllers/class.TweetController'
import ProfileCard from './ProfileCard'
import TweetWritterCard from './TweetWritterCard'
import Layout from './Layout'
export default class Home extends Component {
    state = { tweets: [], errors: [], me: null }

    componentWillMount() {
        this.fetchTweets()
        Auth.me().then(me => this.setState({ me }))
    }

    componentDidMount() {
        if (!Auth.isLoggdin()) this.props.history.push('/login')
    }

    fetchTweets = () => {
        TweetController.index().then(tweets => this.setState({ tweets }))
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ProfileCard />
                        </div>
                        <div className="col-md-6">
                            <Errors {...this.state} />
                            <TweetWritterCard fetchTweets={this.fetchTweets} />
                            <Tweets
                                {...this.state}
                                fetchTweets={this.fetchTweets}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

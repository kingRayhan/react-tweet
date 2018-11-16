import React from 'react'
import Tweet from './Tweet'
import { BarLoader } from 'react-spinners'

export default function Tweets({ tweets, fetchTweets }) {
    if (!tweets) return <BarLoader color={'#0890df'} />

    return tweets.map(tweet => (
        <Tweet tweet={tweet} key={tweet.tweet_id} fetchTweets={fetchTweets} />
    ))
}

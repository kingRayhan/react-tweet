require('./bootstrap')
import Auth from './classes/class.Auth'
window.Auth = Auth

import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Tweets from './components/Tweets'
import Home from './components/Home'
import Login from './Auth/Login'
import Signup from './Auth/Signup'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </HashRouter>
)

render(<App />, document.querySelector('#react-app'))

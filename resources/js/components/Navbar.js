import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../classes/class.Auth'

export default class Navbar extends Component {
    handleLogout = () => {
        Auth.logout()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        React Tweet
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/* <ul className="navbar-nav mr-auto" /> */}

                        {Auth.isLoggdin() ? (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={this.handleLogout}
                                        href="javascript:void(0)"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
}

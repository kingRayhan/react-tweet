import React, { Component } from 'react'
import Auth from '../classes/class.Auth'
import Layout from '../components/Layout'
export default class Login extends Component {
    state = {
        err: false,
    }

    componentDidMount() {
        if (Auth.isLoggdin()) this.props.history.push('/')
    }
    handleLogin = () => {
        Auth.login({
            email: this.refs.email.value,
            password: this.refs.password.value,
        })
            .then(d => this.setState({ err: false }))
            .catch(e => this.setState({ err: true }))
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            {this.state.err === true ? (
                                <div className="alert alert-danger">
                                    Wrong username or password
                                </div>
                            ) : null}

                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    {/* EMail Address */}
                                    <div className="form-group row">
                                        <label
                                            htmlFor="email"
                                            className="col-sm-4 col-form-label text-md-right"
                                        >
                                            E-Mail Address
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                ref="email"
                                            />
                                        </div>
                                    </div>
                                    {/* EMail Address */}
                                    <div className="form-group row">
                                        <label
                                            htmlFor="password"
                                            className="col-sm-4 col-form-label text-md-right"
                                        >
                                            Password
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                ref="password"
                                            />
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={this.handleLogin}
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

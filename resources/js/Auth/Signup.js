import React, { Component } from 'react'
import { post } from 'axios'
import Layout from '../components/Layout'
export default class Signup extends Component {
    componentDidMount() {
        if (Auth.isLoggdin()) this.props.history.push('/')
    }
    handleSignup = () => {
        Auth.signup({
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
        }).then(d => {
            console.log(d)
            // this.props.history.push('/')
        })
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    {/* Name */}
                                    <div className="form-group row">
                                        <label
                                            htmlFor="name"
                                            className="col-sm-4 col-form-label text-md-right"
                                        >
                                            Name
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="name"
                                                type="name"
                                                className="form-control"
                                                name="name"
                                                ref="name"
                                            />
                                        </div>
                                    </div>
                                    {/* Email */}
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
                                                onClick={this.handleSignup}
                                            >
                                                Signup
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

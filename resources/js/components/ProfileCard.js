import React, { Component, Fragment } from 'react'
import Auth from '../classes/class.Auth'

import { BarLoader } from 'react-spinners'

export default class ProfileCard extends Component {
    state = {
        name: null,
        email: null,
        bio: null,
        id: null, //user id
        edit: false,
        tweet_count: 0,
        loading: true,
    }

    componentDidMount() {
        Auth.me().then(me =>
            this.setState({
                name: me.name,
                email: me.email,
                bio: me.bio,
                id: me.id,
                tweet_count: me.tweet_count,
                loading: false,
            })
        )
    }

    updateProfile = () => {
        const { name, email, bio } = this.state
        Auth.update(this.state.id, {
            name,
            email,
            bio,
            password: this.refs.password.value,
        }).then(res => {
            this.setState({ edit: false })
            toastr['success']('Are you the six fingered man?')
        })
    }

    render() {
        if (this.state.loading) return <BarLoader color={'#0890df'} />
        return (
            <Fragment>
                {!this.state.edit ? (
                    <div className="profile-card">
                        <div
                            className="user-cover-image"
                            style={{
                                backgroundImage: `url('https://bootstrap-themes.github.io/application/assets/img/iceland.jpg')`,
                            }}
                        />

                        <div className="profile-picture-and-name d-flex align-items-center flex-column">
                            <div className="image">
                                <img
                                    className="user-profile-picture"
                                    src="https://bootstrap-themes.github.io/application/assets/img/avatar-dhg.png"
                                />
                            </div>
                            <div className="name">
                                <p>{this.state.name}</p>
                            </div>
                        </div>
                        <div className="desc">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veritatis itaque,
                            </p>
                        </div>
                        <div className="footer text-center pt-3">
                            <p>{this.state.tweet_count} Tweets</p>
                            <p>
                                <button
                                    className="btn btn-link"
                                    href="javascript:void(0)"
                                    onClick={() =>
                                        this.setState({ edit: true })
                                    }
                                >
                                    Edit
                                </button>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="edit-form">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                value={this.state.name}
                                onChange={({ target: { value: name } }) =>
                                    this.setState({ name })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                type="text"
                                onChange={({ target: { value: bio } }) =>
                                    this.setState({ bio })
                                }
                                placeholder="Bio"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={({ target: { value: email } }) =>
                                    this.setState({ email })
                                }
                                type="text"
                                placeholder="Email Address"
                                className="form-control"
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                ref="password"
                                type="text"
                                placeholder="Update Password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="app-btn"
                                onClick={this.updateProfile}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                )}
            </Fragment>
        )
    }
}

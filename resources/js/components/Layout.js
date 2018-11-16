import React, { Component } from 'react'
import Navbar from './Navbar'
export default class Layout extends Component {
    render() {
        return (
            <div id="app-Layout">
                <Navbar />
                <div id="app-body" className="py-4">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import logo from '../logo.svg';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={logo} alt="" className="logo"/>
                <h3 className="logo-text">The Shoppies</h3>
            </div>
        )
    }
}

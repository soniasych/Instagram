import React, { Component } from 'react';
/* import { Container } from 'reactstrap'; */
import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';

import './Layout.css';
export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="screen-content">
                <NavBar />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
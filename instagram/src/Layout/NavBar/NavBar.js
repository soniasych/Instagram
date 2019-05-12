import React, { Component } from 'react';
import './NavBar.css';
import StoryImage from '../../assets/instagram-load-story.png';
import InstagramLogo from '../../assets/instagram-logo.png';
import AddAccountImage from '../../assets/instagram-add-account.png';

export class NavBar extends Component {
    static displayName = NavBar.name;

    render() {
        return (
            <div className="MainNavBar">
                <div className="navbar">
                    <div>
                        <img src={StoryImage} alt="SroryImage" />
                    </div>
                    <div className="MainLogo">
                        <img src={InstagramLogo} alt="InstagramLogo" />
                    </div>
                    <div>
                        <img src={AddAccountImage} alt="AddAccountImage" />
                    </div>
                </div>
            </div>
        );
    }
}
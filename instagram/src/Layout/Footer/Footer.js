import React, { Component } from 'react';
import './Footer.css';
import '../NavBar/NavBar.css';
import HomeIcon from '../../assets/instagram-home.png';
import SearchIcon from '../../assets/instagram-search.png';
import LoadImageIcon from '../../assets/instagram-load-image.png';
import LikeIcon from '../../assets/instagram-like.png';
import UserProfileIcon from '../../assets/instagram-user-profile.png';

export class Footer extends Component {
    render() {
        return (
            <div className="MainFooter">
                <div className="navbar">
                    <div>
                        <img src={HomeIcon} alt="HomeIcon" />
                    </div>
                    <div>
                        <img src={SearchIcon} alt="SearchIcon" />
                    </div>
                    <div>
                        <img src={LoadImageIcon} alt="LoadImageIcon" />
                    </div>
                    <div>
                        <img src={LikeIcon} alt="LikeIcon" />
                    </div>
                    <div>
                        <img src={UserProfileIcon} alt="UserProfileIcon" />
                    </div>
                </div>
            </div>
        );
    }
}
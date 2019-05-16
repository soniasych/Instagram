import React, { Component } from 'react';
import './Footer.css';
import '../NavBar/NavBar.css';
import HomeIcon from '../../assets/instagram-home.png';
import SearchIcon from '../../assets/instagram-search.png';
import LoadImageIcon from '../../assets/instagram-load-image.png';
import LikeIcon from '../../assets/instagram-like.png';
import UserProfileIcon from '../../assets/instagram-user-profile.png';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div className="MainFooter">
                <div className="navbar">
                    <div>
                        <Link to="/">
                            <img src={HomeIcon} alt="HomeIcon" />
                        </Link>
                    </div>
                    <div>
                        <img src={SearchIcon} alt="SearchIcon" />
                    </div>
                    <div>
                        <button onClick={() => {
                            this.props.history.push('/newPost', {
                                post: this.props.post
                            })
                        }}>
                            <img src={LoadImageIcon} alt="LoadImageIcon" />
                        </button>
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
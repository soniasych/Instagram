import React, { Component } from 'react';
import NasaLogo from './assets/NASA_logo.png';
import SaturnImage from './assets/saturn.jpg'
import InstagramOptions from './assets/instagram-options.png';
import LikeIcon from './assets/instagram-like.png';
/*import UnlikeIcon from './assets/instagram-unlike.png';*/
import CommentIcon from './assets/instagram-comment.png';
import ShareIcon from './assets/instagram-share.png';
import SaveIcon from './assets/instagram-save.png';
/*import UnSaveIcon from './assets/instagram-unsave.png';*/

import './layout.css';

export class Layout extends Component {
    render() {
        return (
            <div>
                <div className="userNick">
                    <div>
                        <img src={NasaLogo} alt="NasaLogo"/>
                    </div>
                    <div>
                        nasa
                    </div>
                    <div>
                        <img src={InstagramOptions} alt="InstagramOptions"/>
                    </div>
                </div>
                <div className="userImage">
                    <img src={SaturnImage} alt="Saturn"/>
                </div>
                <div className="userNick">
                    <div>
                        <img src={LikeIcon} alt="LikeIcon"/>
                    </div>
                    <div>
                        <img src={CommentIcon} alt="CommentIcon"/>
                    </div>
                    <div>
                        <img src={ShareIcon} alt="ShareIcon"/>
                    </div>
                    <div>
                        <img src={SaveIcon} alt="SaveIcon"/>
                    </div>
                </div>
                

                <div>Likes</div>
                <div>Comments</div>
            </div>
        );
    }
}
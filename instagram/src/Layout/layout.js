import React, { Component } from 'react';
import NasaLogo from '../assets/NASA_logo.png';
import SaturnImage from '../assets/saturn.jpg';
import InstagramOptions from '../assets/instagram-options.png';
import LikeIcon from '../assets/instagram-like.png';
/*import UnlikeIcon from './assets/instagram-unlike.png';*/
import CommentIcon from '../assets/instagram-comment.png';
import ShareIcon from '../assets/instagram-share.png';
import SaveIcon from '../assets/instagram-save.png';
/*import UnSaveIcon from './assets/instagram-unsave.png';*/

import './layout.css';
import { Comments } from './Comments/Comments';
import { Route, Link } from 'react-router-dom';

export class Layout extends Component {    
    constructor(props){
        super(props);
        this.state = {
            showComments: false
        };        
    }

      
    /* ShowNewCommentHandler = () => {
        const doesShow = this.state.showComments;
        this.setState({showComments: !doesShow});
    }*/


    render() {
       /* let outputComments = null;
       
       if(this.state.showComments)
       {
           outputComments = (
            <div className="comment-list">
                {сomments}
            </div>
           );
       } */

        return (
            <div className="currentLayout">
                <div className="userOptions">
                    <div className="userNickImage">
                        <img src={NasaLogo} alt="NasaLogo"/>
                    </div>
                    <div>
                        nasa
                    </div>
                    <div className="userImageOptions">
                        <img src={InstagramOptions} alt="InstagramOptions"/>
                    </div>
                </div>
                <div className="userImage">
                    <img src={SaturnImage} alt="Saturn"/>
                </div>
                <div className="userOptions">
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
                <div className="userImageDescription">
                    <div>Likes amount</div>
                    <div>
                        <label>nasa</label>
                        <span>Some description</span>
                    </div>
                </div>

                <div className="comments">
                    <div>
                        <Link to="/comments" /* onClick={this.ShowNewCommentHandler} */>Show all comments</Link>
                    </div>
                    <Route path="/comments" exact component={Comments} />
                </div>
            </div>
        );
    }
}

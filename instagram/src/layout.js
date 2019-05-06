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
    constructor(props){
        super(props);
        this.state = {
            comments: [
                {
                    commentId: 1,
                    commentAuthor: "sonia_sych",
                    commentText: "Beautiful picture"
                },
                {
                    commentId: 2,
                    commentAuthor: "yuliia_pavlik",
                    commentText: "It`s amazing!"
                },
                {
                    commentId: 3,
                    commentAuthor: "natasul",
                    commentText: "Wow!"
                },
                {
                    commentId: 4,
                    commentAuthor: "anastasia_poli",
                    commentText: "Nothing special..."
                },
                {
                    commentId: 5,
                    commentAuthor: "olivi_k",
                    commentText: "Is it real picture?"
                }
            ]
        };
    }    

    renderCommentList = () => {       
        return(<ul>
            { this.state.comments.map(
                comment => <li key={comment.commentId}>
                <span>{comment.commentAuthor}</span>
                <span>{comment.commentText}</span>
            </li>
            )}
        </ul>
        );
    }

    render() {
       let сomments = this.renderCommentList();
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
                    <div>Likes amount</div>
                    <div className="userImageDescription">
                        <span>nasa</span>
                        <p>Some description</p>
                    </div>
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
                <div>Comments
                    <div>
                    {сomments}
                    </div>
                </div>
            </div>
        );
    }
}

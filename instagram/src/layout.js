import React, { Component } from 'react';
import NasaLogo from './assets/NASA_logo.png';
import ProfileImage from './assets/profile_photo2.jpg';
import ProfileImage1 from './assets/profile_photo7.jpg';
import ProfileImage2 from './assets/profile_photo4.jpg';
import ProfileImage3 from './assets/profile_photo3.jpg';
import SaturnImage from './assets/saturn.jpg';
import MyProfileImage from './assets/profile_photo1.jpg';
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
                    commentAuthorImage: MyProfileImage,
                    commentText: "Beautiful picture"
                },
                {
                    commentId: 2,
                    commentAuthor: "yuliia_pavlik",
                    commentAuthorImage: ProfileImage,
                    commentText: "It`s amazing!"
                },
                {
                    commentId: 3,
                    commentAuthor: "natasul",
                    commentAuthorImage: ProfileImage1,
                    commentText: "Wow!"
                },
                {
                    commentId: 4,
                    commentAuthor: "anastasia_poli",
                    commentAuthorImage: ProfileImage2,
                    commentText: "Nothing special..."
                },
                {
                    commentId: 5,
                    commentAuthor: "olivi_k",
                    commentAuthorImage: ProfileImage3,
                    commentText: "Is it real picture?"
                }
            ],

            showComments: false,
            
            commentss: [
                {
                    commentId: 1,
                    commentAuthor: "sonia_sych",
                    commentAuthorImage: MyProfileImage,
                    commentText: "Beautiful picture"
                }
            ],
            commentText: ""
        };

        this.onCommentTextChange = this.onCommentTextChange.bind(this);
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        
    }

      
    ShowNewCommentHandler = () => {
        const doesShow = this.state.showComments;
        this.setState({showComments: !doesShow});
    }

    
    renderCommentList = () => {       
        return(
            <div className="userProfileImage">
                <ul>
                    { this.state.comments.map(
                        comment => 
                        <li key={comment.commentId} id="comments-list">
                        <img src={comment.commentAuthorImage} alt="userImage" />
                        <span id="comment-space">{comment.commentAuthor}  </span>
                        <span>{comment.commentText}</span>
                    </li>
                    )}
                </ul>
            </div>
        );
    }

    onCommentTextChange = event => {
        this.setState({commentText: event.target.value});
    }

    determineMaxId = () => {
        var id = Math.max.apply(Math, this.state.comments.map(comment => {return comment.commentId;}));
        return id;
    }

    onCommentSubmit = event => {
        let newArray = [...this.state.comments];
        let newId = this.determineMaxId() + 1;
        let commentText = this.state.commentText;

        let comment = {
            commentId: newId,
            commentAuthor: "nasa  ",
            commentAuthorImage: NasaLogo,
            commentText: commentText
        };

        newArray.push(comment);

        this.setState(() => {
            return {comments: newArray,
                    commentText: ""
            };
        });

        event.preventDefault();
    }

    render() {
       let сomments = this.renderCommentList();
       let outputComments = null;
       
       if(this.state.showComments)
       {
           outputComments = (
            <div className="comment-list">
                {сomments}
            </div>
           );
       }

       
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
                        <a href="#" onClick={this.ShowNewCommentHandler}>Show all comments</a>
                    </div>
                    {/* { this.state.showComments ?
                    <div>
                    {сomments}
                    </div> : null
                    } */}
                    {outputComments}
                    <div>
                        <form onSubmit={this.onCommentSubmit}>
                            <div className="add-comment">
                                <label>nasa</label>
                                <input name="commentText" type="text" value={this.state.commentText} onChange={this.onCommentTextChange} placeholder="Add comment..."/>
                                <button name="addCommentButton" type="submit" value="Publish">Publish</button>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

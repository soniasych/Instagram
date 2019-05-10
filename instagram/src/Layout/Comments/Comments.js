import React, { Component } from 'react';
import NasaLogo from '../../assets/NASA_logo.png';
import MyProfileImage from '../../assets/profile_photo1.jpg';
import ProfileImage from '../../assets/profile_photo2.jpg';
import ProfileImage1 from '../../assets/profile_photo7.jpg';
import ProfileImage2 from '../../assets/profile_photo4.jpg';
import ProfileImage3 from '../../assets/profile_photo3.jpg';

import '../Comments/Comments.css';

export class Comments extends Component{
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
            
            commentText: ""
        };

        this.onCommentTextChange = this.onCommentTextChange.bind(this);
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        
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
        
        return(
            <div className="comments">
                <div className="comment-list">
                    {сomments}
                </div> 
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
        )

    }

}
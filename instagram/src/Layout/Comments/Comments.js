import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NasaLogo from '../../assets/NASA_logo.png';
import MyProfileImage from '../../assets/profile_photo1.jpg';
import ProfileImage from '../../assets/profile_photo2.jpg';
import ProfileImage1 from '../../assets/profile_photo7.jpg';
import ProfileImage2 from '../../assets/profile_photo4.jpg';
import ProfileImage3 from '../../assets/profile_photo3.jpg';
import BackArrow from '../../assets/instagram-arrows-left.png';
import Direct from '../../assets/instagram-direct-message.png';
import Axios from 'axios';

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
            
            commentText: "",
            comment: []
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
        //let userName = commenty.userName;
        /* let author = comment.userName;
        let avatar = this.state.commentAuthorImage;*/     
        let author = " nasa";
        let avatar = NasaLogo;


        let comment = {
            commentId: newId,
            commentAuthor: author,
            commentAuthorImage: avatar,
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

    componentDidMount() {
        this.getPostData();
    }

    render() {
        let сomments = this.renderCommentList();
        //let comment = this.state.comment;
        return(
                <div className="comments">
                    <div className="MainComments-header">
                        <div className="comments-header">
                            <div>
                                <Link to="/">
                                    <img src={BackArrow} alt="BackArrow"/>
                                </Link>
                            </div>
                            <div>
                                <label>Comments</label>
                            </div>
                            <div>
                                <img src={Direct} alt="Direct"/>
                            </div>
                        </div>
                    </div>
                    <div className="comment-list">
                        {сomments}
                    </div> 
                    <div className="input-comment">
                    {/* <div> */}
                        <form onSubmit={this.onCommentSubmit}>
                            <div className="add-comment">
                                {/* <label>{comment.userName}</label> */}
                                {/* <label>nasa</label> */}
                                <img src={NasaLogo} alt="NasaLogo"/>
                                <input name="commentText" type="text" value={this.state.commentText} onChange={this.onCommentTextChange} placeholder="Add comment..."/>
                                <button name="addCommentButton" type="submit" value="Publish">Publish</button>
                            </div>   
                        </form>  
                    {/* </div> */}
                    </div>
                </div>
        )

    }

    async getPostData() {
        const response = await Axios.get(`https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/`);
        const data = await response.data;
        this.setState({comment: data});
        console.log(data);
        console.log(this.state.comment);
    }


}
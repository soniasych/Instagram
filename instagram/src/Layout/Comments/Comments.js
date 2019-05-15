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
                    Id: 1,
                    Author: "sonia_sych",
                    AuthorImage: MyProfileImage,
                    Text: "Beautiful picture"
                },
                {
                    Id: 2,
                    Author: "yuliia_pavlik",
                    AuthorImage: ProfileImage,
                    Text: "It`s amazing!"
                },
                {
                    Id: 3,
                    Author: "natasul",
                    AuthorImage: ProfileImage1,
                    Text: "Wow!"
                },
                {
                    Id: 4,
                    Author: "anastasia_poli",
                    AuthorImage: ProfileImage2,
                    Text: "Nothing special..."
                },
                {
                    Id: 5,
                    Author: "olivi_k",
                    AuthorImage: ProfileImage3,
                    Text: "Is it real picture?"
                }
            ],
            
            text: "",
            comment: []
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        
    }

    
    renderCommentList = () => {       
        return(
            <div className="userProfileImage">
                <ul>
                    { this.state.comments.map(
                        comment => 
                        <li key={comment.Id} id="comments-list">
                        <div className="outputComments-list">
                            <div className="comment-user-info">
                                <img src={comment.AuthorImage} alt="userImage" />
                                <label id="comment-space">{comment.Author}  </label>
                            </div>
                            <div className="comment-text">
                                <label>{comment.Text}</label>
                            </div>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        );
    }

    onTextChange = event => {
        this.setState({text: event.target.value});
    }

    determineMaxId = () => {
        var id = Math.max.apply(Math, this.state.comments.map(comment => {return comment.Id;}));
        return id;
    }

    onCommentSubmit = event => {
        let newArray = [...this.state.comments];
        let newId = this.determineMaxId() + 1;
        let text = this.state.text;
        //let userName = commenty.userName;
        /* let author = comment.userName;
        let avatar = this.state.AuthorImage;*/     
        let author = " nasa";
        let avatar = NasaLogo;


        let comment = {
            Id: newId,
            Author: author,
            AuthorImage: avatar,
            Text: text
        };

        newArray.push(comment);

        this.setState(() => {
            return {comments: newArray,
                    text: ""
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
                                <input name="commentText" type="text" value={this.state.text} onChange={this.onTextChange} placeholder="Add comment..."/>
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
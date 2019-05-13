import React, { Component } from 'react';
import NasaLogo from '../../assets/NASA_logo.png';
import SaturnImage from '../../assets/saturn.jpg';
import InstagramOptions from '../../assets/instagram-options.png';
import LikeIcon from '../../assets/instagram-like.png';
/*import UnlikeIcon from './assets/instagram-unlike.png';*/
import CommentIcon from '../../assets/instagram-comment.png';
import ShareIcon from '../../assets/instagram-share.png';
import SaveIcon from '../../assets/instagram-save.png';
/*import UnSaveIcon from './assets/instagram-unsave.png';*/

import './PostLayout.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export class PostLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }

    componentDidMount() {
        this.getPostData();
    }

    render() {
        let post = this.state.post;
        return (
            <div>
                { post.map(post => 
                <div  key={post.id} className="currentLayout">
                    <div className="userOptions">
                        <div className="userProfileImage">
                            <img src={post.avatar} alt="NasaLogo" />
                        </div>
                        <div className="userNickname">
                            <label>
                                {post.userName} 
                            </label>  
                        </div>
                        <div className="userImageOptions">
                            <img src={InstagramOptions} alt="InstagramOptions" />
                        </div>
                    </div>
                    <div className="userImage">
                        <img src={post.imageUrl} alt="Saturn" />
                    </div>
                    <div className="userOptions">
                        <div>
                            <img src={LikeIcon} alt="LikeIcon" />
                        </div>
                        <div>
                            <img src={CommentIcon} alt="CommentIcon" />
                        </div>
                        <div>
                            <img src={ShareIcon} alt="ShareIcon" />
                        </div>
                        <div>
                            <img src={SaveIcon} alt="SaveIcon" />
                        </div>
                    </div>
                    <div className="userImageDescription">
                        <div>
                            <label>{post.likes}</label>
                            <label>Likes</label>
                        </div>
                        <div>
                            <label>{post.userName}</label>
                            <span>Some description</span>
                        </div>
                    </div>
                
                    <div>
                        <div>
                            <Link id="comments" to="/comments">Show all comments</Link>
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }

    async getPostData() {
        const id = this.props.match.params.id;
        const response = await Axios.get(`https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/`);
        const data = await response.data;
        this.setState({post: data});
        console.log(data);
        console.log(this.state.post);
    }

}

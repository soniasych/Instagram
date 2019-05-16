import React, { Component } from 'react';
import InstagramOptions from '../../assets/instagram-options.png';
import LikeIcon from '../../assets/instagram-like.png';
/*import UnlikeIcon from './assets/instagram-unlike.png';*/
import CommentIcon from '../../assets/instagram-comment.png';
import ShareIcon from '../../assets/instagram-share.png';
import SaveIcon from '../../assets/instagram-save.png';
/*import UnSaveIcon from './assets/instagram-unsave.png';*/
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import './PostLayout.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export class PostLayout extends React.Component {
    constructor(props) {
        super(props);

        console.log('props', props)
        this.state = {
            post: [],
            loadedPosts: null,
            selectedPostsId: null
        };
    }

    componentDidMount() {
        this.getPostData();
    }

    /* componentDidUpdate() {
        let id = this.selectedPostsId;
        if(id){
            if(!this.state.loadedPosts || (this.state.loadedPosts && this.state.loadedPosts.id !== id)) {
                Axios.get('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/' + id)
                    .then(response => {
                        console.log(response);
                        this.setState({ loadedPosts: response.data });
                    });
            }
        }
    } */

    postSelectedHandler = id => {
        this.setState({ selectedPostsId: id });

    }

    render() {
        let post = this.state.post;
        /* let updatePost = null;
        if(this.state.loadedPosts) {
            updatePost =  ( */
        let updatePost =  (
                post.slice(0).reverse().map(post => 
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
                                <img src={InstagramOptions} alt="InstagramOptions" onClick={() => this.postSelectedHandler(post.id)} />
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
                                <Link to="/comments">
                                    <img src={CommentIcon} alt="CommentIcon" />
                                </Link>
                            </div>
                            <div>
                                <img src={ShareIcon} alt="ShareIcon" onClick={this.deletePostDataHandle} />
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
                                <span>{post.description}</span>
                            </div>
                        </div>
                    
                        <div>
                            <div>
                                <Link id="comments" to="/comments">Show all comments</Link>
                            </div>
                        </div>
                    </div>
                    )
            );
        /* } */
        
        return (
            <div>
                <NavBar />
                {updatePost}
                {/* { post.map(post => 
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
                            <img src={InstagramOptions} alt="InstagramOptions" onClick={this.deletePostDataHandle} />
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
                            <Link to="/comments">
                                <img src={CommentIcon} alt="CommentIcon" />
                            </Link>
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
                            <span>{post.description}</span>
                        </div>
                    </div>
                
                    <div>
                        <div>
                            <Link id="comments" to="/comments">Show all comments</Link>
                        </div>
                    </div>
                </div>
                )} */}
                <Footer 
                    post={this.state.post}
                    history={this.props.history}
                />
            </div>
        );
    }

    async getPostData() {
        const response = await Axios.get(`https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/`);
        const data = await response.data;
        /* const updateData = data.map(update => {
            return {
                ...update,
                comments: []
            }
        }); */
        this.setState({post: data});
        //this.setState({post: updateData});
        console.log(data);
        console.log(this.state.post);
    }

    deletePostDataHandle = () => {
        Axios.delete(`https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/${this.state.selectedPostsId}`)
                    .then(response => {
                        console.log(response);
                    });
    }

}

import React, { Component } from 'react';
import Saturn from '../../assets/saturn.jpg';
import NasaLogo from '../../assets/NASA_logo.png';
import BackArrow from '../../assets/instagram-arrows-left.png';
import Axios from 'axios';
import './NewPost.css';

export class NewPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newPost : [
                {
                    imageUrl: Saturn,
                    likes: "0",
                    userName: "nasa",
                    avatar: NasaLogo,
                    description: ""
                }
            ],
            description: "",
            imageUrl: Saturn,
            likes: "0"
        };

        this.onTextChange = this.onTextChange.bind(this);

    }

    onTextChange = event => {
        this.setState({description: event.target.value});
    }

    postDataHandler = () => {
        const data = {
            description: this.state.description,
            imageUrl: this.state.imageUrl,
            likes: this.state.likes
        };
        Axios.post('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/', data)
            .then(response => {
                console.log(response);
                /* var newArray = [];
                newArray.unshift(response.data);
                response.data = newArray; */

                var newArray = [];
                newArray.unshift(response.data);

                for (var i = 0; i < response.data.length; i++) { 
                    
                    newArray.unshift(response.data[i]);
                }

                response.data = newArray; 
        });
    }

    render() {
        return(
            <div className="NewPost">
                <div className="MainNewPost-header">
                    <div className="NewPost-header">
                        <div>
                            <img src={BackArrow} alt="BackArrow"/>
                        </div>
                        <div>
                            <label>
                                New Post
                            </label>
                        </div>
                        <div>
                            <button onClick={this.postDataHandler}>
                                Share
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="NewPost-user-image">
                    <img src={this.state.imageUrl} alt="Saturn"/>
                </div>
                <div className="NewPost-description">
                    <textarea name="description" type="text" value={this.state.description} onChange={this.onTextChange} placeholder="Add description..."/>
                </div>
                
            </div>
        );
    }

}
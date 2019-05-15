import React, { Component } from 'react';
import BackArrow from '../../assets/instagram-arrows-left.png';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './NewPost.css';

export class NewPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            imageUrl: undefined,
            likes: "0", 
            isLoading: true,
            selectedFile: undefined,
            selectedFileName: undefined,
            value: ''
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    onTextChange = event => {
        this.setState({description: event.target.value});
    }

    /* handleChange(selectorFiles)
    {
        console.log(selectorFiles);
    } */

    handleChange(event) {
        if (event.target.files[0]) {
            this.setState({
                selectedFile: event.target.files[0],
                selectedFileName: event.target.files[0].name,
                imageUrl: window.URL.createObjectURL(event.target.files[0]),
                value: event.target.value,
            });
        }
    }

    handleImageClick = () => {
        var e = document.getElementById("user-image");
        e.style.visibility = 'visable';
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
                            <Link to="/">
                                <img src={BackArrow} alt="BackArrow"/>
                            </Link>
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
                <div className="NewPost-container">
                    <div className="NewPost-user-image">
                        <img src={this.state.imageUrl} id="user-image" alt="ImageLoaded" />
                    </div>
                    <div className="NewPost-input-file">
                        {/* <input type="file" onClick={this.state.isLoading} onChange={ (e) => this.handleChange(e.target.files) }/> */}
                        <input name="file" id="file" type="file" onClick={this.handleImageClick} onChange={this.handleChange}/>
                        <label for="file">Choose a file</label>
                    </div>
                    <div className="NewPost-description">
                        <textarea name="description" type="text" value={this.state.description} onChange={this.onTextChange} placeholder="Add description..."/>
                    </div>
                </div>
                
                
            </div>
        );
    }

}
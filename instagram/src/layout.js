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
            ],
            defaultComment:  {
                commentId: 6,
                commentAuthor: "rgosling",
                commentText: "La La Land"
            },
            showComments: false,
            newComment:  {
                commentId: 7,
                commentAuthor: "nasa",
                commentText: ""
            },
            VeryNewComment: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.updateInputValue = this.updateInputValue.bind(this);
    }

   

    /* handleChange(event){
        this.setState(
            {defaultComment: event.target.defaultComment}
            );
    } */

    /* handleChange(event){
        this.setState(
            {comments: this.state.comments.concat({defaultComment: ""})}
            );
    } */
    
    /* updateInputValue(evt){
        //console.log("input field updated with "+evt.target.value);
        this.state={newComment: evt.target.value};   
    
      } */

   /*  handleChange(event){
        var newArray = this.state.comments.slice();   
        newArray.push(this.state.newComment);   
        this.setState({comments:newArray})
    } */

    handleChange = (e) => {
        this.setState({
            newComment: e.target.value
        })
    }

    /* handleSubmit(event){
        let submit = this.state.newComment;
            //event.PreventDefault();
            return(submit);
        
    } */

    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.newComment.commentText !=undefined)
      {
        alert('Your input value is: ' + this.state.newComment.commentText)
      }
    }

    updateInput(evt){
        this.state={value: evt.target.value};   
          }


    handleSubmit(event){
        event.preventDefault();
        var newArray = this.state.comments.slice();   
        const form = {
            commentId: this.state.newComment.commentId,
            commentAuthor: this.state.newComment.commentAuthor,
            commentText: this.state.newComment.commentText
           }

           newArray.push(form);
           this.setState({
                comments: {
                    commentId: '', 
                    commentAuthor: '',
                    commentText: ''
            }
           })
        
    }


    ShowNewCommentHandler = () => {
        const doesShow = this.state.showComments;
        this.setState({showComments: !doesShow});
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
       let outputComments = null;
       
       if(this.state.showComments)
       {
           outputComments = (
            <div>
                {сomments}
            </div>
           );
       }

       /* let commentCopy = JSON.parse(JSON.stringify(this.state.comments))
       //make changes to ingredients
       commentCopy[2].commentText = //whatever new ingredients are
       this.setState({
          comments:commentCopy 
        }); */



       //let newComment = this.state.defaultComment.commentText;
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
                        <a href="#" onClick={this.ShowNewCommentHandler} >Show comments</a>
                    </div>
                    {/* { this.state.showComments ?
                    <div>
                    {сomments}
                    </div> : null
                    } */}
                    {outputComments}
                    <div>Add comment
                        <form onSubmit={this.addValue} >
                        {/* <form onSubmit={this.handleSubmit} > */}
                        {/* <form> */}
                            <label>Nasa
                           {/*  <input type="text" id="inputfield" value={this.state.newComment.commentText} onChange={e => this.handleChange(e)} /> */}
                                 <input type="text" id="inputfield" onChange={(e) => this.updateInput(e)}>
                                  
                                </input> 
                            </label>
                            {/* <input onClick={() => this.handleChange()} type="submit" value="add"/> */}
                            <input  type="submit" value="add"/>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

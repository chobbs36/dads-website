import React, { Component } from 'react';
import Comment from './comment';
import fire from '../firebase/firebase';

import 'firebase/database';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        console.log('comment list props', props);
    }

    generateFirebase = () => {
        let database = fire.database();
        let ref = database.ref('Comments');

        return ref;
    }

    componentWillMount = () => {
        let fb = this.generateFirebase();
        // Create references to messages in Firebase Database
        fb.on('value', this.gotData, this.errData);
    }

    gotData = (comments) => {
        let bookComments = comments.val();
        let showComments = Object.keys(bookComments).map((key) => {
            return bookComments[key];
        })
        console.log('show comments', showComments);

        this.setState({
            comments: showComments
        })

        return showComments;
    }

    renderCommentUI = (commentArr) => {
        return commentArr.map((comment) => {
            return (
                <div style={commentStyle}>
                    <h6 style={commentNameStyle}>{comment.name}</h6>
                    <p style={commentMessageStyle}>{comment.message}</p>
                </div>
            )
        }
        )
    }


    errData = (error) => {
        console.log('Error');
        console.log(error);
    }

    render() {
        console.log('render commentList', this.state.comments);
        return (
            <div style={commentListStyle}>
                {this.renderCommentUI(this.state.comments)}
            </div>
        )
    }
}

const commentListStyle = {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    opacity: 0.9
}

const commentStyle = {
    display: 'flex',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderColor: 'black',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 90,
    justifyContent: 'space-around',
    margin: 0
}

const commentNameStyle = {
    margin: 5
}

const commentMessageStyle = {
    margin: 5
}

export default CommentList;
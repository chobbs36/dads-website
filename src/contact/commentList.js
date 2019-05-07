import React, { Component } from 'react';
import Comment from './comment';
import fire from '../firebase/firebase';

import 'firebase/database';

let commentList = [];

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
        console.log('firebase', comments.val());
        let bookComments = comments.val();
        console.log('bookComments', bookComments);

        let showComments = Object.keys(bookComments).map((key) => {
            return bookComments[key];
        })
        console.log('show comments', showComments);

        this.setState({
            comments: showComments
        })

        return showComments;
    }

    renderCommentUI = (randomArr) => {
        console.log("we in herer", this.state.comments)
        return randomArr.map((comment) => {
            return (
                <ul>
                    <li>{comment.name}: {comment.message}</li>
                </ul>
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
            <div>
                {this.renderCommentUI(this.state.comments)}
            </div>
        )
    }
}

export default CommentList;
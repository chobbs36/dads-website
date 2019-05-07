import React, { Component } from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    render() {
        return (
            <div style={contactStyle}>
                <div>
                    <h3>Leave a comment</h3>
                    <CommentForm />
                    <CommentList />
                </div>
            </div>
        )
    }
}

const contactStyle = {
    display: 'flex',
    flexDirection: 'column'
}

export default Contact;
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
                <CommentForm />
                <CommentList />
            </div >
        )
    }
}

const contactStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

export default Contact;
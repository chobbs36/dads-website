import React, { Component } from 'react';
import fire from '../firebase/firebase';

import 'firebase/database';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: '',
            comment: {
                name: '',
                message: ''
            }
        }
    }

    handleFieldChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                [name]: value
            }
        })
    }

    generateFirebase = () => {
        let database = fire.database();
        let ref = database.ref('Comments');

        return ref;
    }
    addMessage = (e) => {
        const target = e.target;
        const targetName = target.name;
        this.setState({
            [targetName]: e.target.value,
        });
        e.preventDefault(); // prevent form submit from reloading the page
        let message = this.generateFirebase();
        message.push(this.state.comment)
        console.log('add message', this.state.comment);
    }

    isFormValid = () => {
        return this.state.comment.name !== '' & this.state.comment.message !== '';
    }

    renderError = () => {
        return this.state.error ? (
            <div>{this.state.error}</div>
        ) : null;
    }

    render() {
        return (
            <div>
                <form style={formStyle} onSubmit={this.addMessage}>
                    <div style={inputStyle}>
                        <label>
                            <input
                                name="name"
                                type="text"
                                value={this.state.comment.name}
                                onChange={this.handleFieldChange}
                                size="50"
                                placeholder="Your name" />
                        </label>
                        <label>
                            <textarea
                                rows="5"
                                name="message"
                                value={this.state.comment.message}
                                onChange={this.handleFieldChange}
                                size="400"
                                placeholder="Add your comment here." />
                        </label>
                    </div>
                    <button style={buttonStyle}>Submit</button>
                </form>
            </div>
        )
    }
}


const formStyle = {
    display: 'flex',
    flexFlow: 'column',
    height: 100,
    justifyContent: 'center',
    marginTop: 15
}

const inputStyle = {
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

const buttonStyle = {
    width: 50,
    alignSelf: 'center'
}

export default CommentForm;
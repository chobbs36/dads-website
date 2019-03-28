import React, { Component } from 'react';
import CommentList from './commentList';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: ''
        }

    }

    handleInputChange = (event) => {
        const target = event.target;
        const targetName = target.name;

        this.setState({
            [targetName]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        alert(this.state.name + ' commented: ' + this.state.comment);
        event.preventDefault();
    }

    render() {
        return (
            <form style={formStyle} onSubmit={this.handleSubmit}>
                <div style={inputStyle}>
                    <label>
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} size="100" />
                    </label>
                    <label>
                        Comment:
                        <input name="comment" type="text" value={this.state.comment} onChange={this.handleInputChange} size="100" />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    height: 100,
    justifyContent: 'center',
    alignItems: 'baseline',
    wrap: 'no-wrap'
}

const inputStyle = {
    margin: 'auto',
    width: '100%'
}


export default Contact;
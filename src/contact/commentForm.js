import React, { Component } from "react";
import fire from "../firebase/firebase";

import "firebase/database";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: "",
      comment: {
        name: "",
        message: ""
      }
    };
  }

  handleFieldChange = event => {
    const { value, name } = event.target;
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  generateFirebase = () => {
    let database = fire.database();
    let ref = database.ref("Comments");

    return ref;
  };
  addMessage = e => {
    let target = e.target;
    let targetName = target.name;
    console.log("addMessageValues", targetName);
    this.setState({
      [targetName]: e.target.value
    });
    e.preventDefault(); // prevent form submit from reloading the page
    let message = this.generateFirebase();
    message.push(this.state.comment);
    console.log("add message", this.state.comment);
    this.clearInputFields();
  };

  clearInputFields = () => {
    this.setState({
      comment: {
        name: "",
        message: ""
      }
    });
  };

  isFormValid = () => {
    return (
      (this.state.comment.name !== "") & (this.state.comment.message !== "")
    );
  };

  renderError = () => {
    return this.state.error ? <div>{this.state.error}</div> : null;
  };

  render() {
    return (
      <div>
        <form style={formStyle} onSubmit={this.addMessage}>
          <h3>Leave a comment</h3>
          <div style={inputStyle}>
            <label style={nameStyle}>
              <input
                name="name"
                type="text"
                value={this.state.comment.name}
                onChange={this.handleFieldChange}
                size="53"
                placeholder="Your name"
                style={nameInputStyle}
              />
            </label>
            <label style={commentStyle}>
              <textarea
                rows="5"
                cols="51"
                name="message"
                value={this.state.comment.message}
                onChange={this.handleFieldChange}
                placeholder="Add your comment here."
                style={commmentInputStyle}
              />
            </label>
          </div>
          <button style={buttonStyle}>Submit</button>
        </form>
      </div>
    );
  }
}

const formStyle = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  marginBottom: 25
};

const inputStyle = {
  margin: "auto",
  width: "100%",
  display: "flex",
  flexDirection: "column"
};

const buttonStyle = {
  width: 100,
  alignSelf: "center",
  padding: 10,
  backgroundColor: "#008000",
  color: "#FFFFFF",
  borderRadius: 5,
  border: "none"
};

const nameStyle = {
  marginBottom: 10
};

const nameInputStyle = {
  padding: 5,
  border: "none",
  borderRadius: 3
};

const commentStyle = {
  marginBottom: 10
};

const commmentInputStyle = {
  padding: 5,
  border: "none",
  borderRadius: 3
};

export default CommentForm;

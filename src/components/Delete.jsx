import React, { Component } from "react";

// component for delete post pop up that asks for password
export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPass: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // when trashcan is clicked, the div in Post.jsx will call this, which will make the component visible; interacts with popUpVisibility function in Post.jsx
  handleClick = () => {
    this.props.visible();
  };

  // when password is inputed, holds input in state
  handleChange(event) {
    this.setState({
      inputPass: event.target.value,
    });
  }

  // when the submit button on the popup is pressed, a get request is sent to the backend and if the password is correct, the post is deleted
  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `http://localhost:5000/deletepost/${this.props.id}/${this.state.inputPass}`
    ).then((res) => {
      if (res.statusText === "OK") {
        alert("Post Deleted");
        window.location = "http://localhost:3000/";
      } else {
        alert("Wrong Password");
      }
    });
  }

  // renders a pop up with a translucent, gray background with a white pop up in the middle that prompts the user for a password to delete the selected post
  render() {
    return (
      <div className="pop-up">
        <div className="pop-up-content">
          <span className="pop-up-exit" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit}>
            <h3>Delete selected post</h3>
            <label>
              Post-specific passcode:
              <input
                type="password"
                id="passcode"
                name="passcode"
                value={this.state.inputPass}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

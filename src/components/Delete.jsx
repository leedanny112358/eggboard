import React, { Component } from "react";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPass: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    this.props.visible();
  };

  handleChange(event) {
    this.setState({
      inputPass: event.target.value,
    });
  }

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
                placeholder="1234"
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

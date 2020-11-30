import React, { Component } from "react";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      manager: "",
      contact: "",
      description: "",
      needs: "",
      time: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const { title, manager, contact, description, needs } = this.state;
    if (
      title === "" ||
      manager === "" ||
      contact === "" ||
      description === "" ||
      needs === ""
    ) {
      alert("Please enter all fields!");
      return;
    }
    event.preventDefault();
    let d = new Date();
    let datetime = d.toUTCString();
    console.log(datetime);
    this.setState({ time: datetime }, () => {
      console.log(this.state.time);
      try {
        fetch("http://localhost:5000/newpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        });
        window.location.href = "http://localhost:3000/";
        alert("Your project was submitted");
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="centered-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Project Title</label>
            <br />
            <input
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Manager Name</label>
            <br />
            <input
              name="manager"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Manager Contact</label>
            <br />
            <input
              name="contact"
              placeholder="Contact"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Description</label>
            <br />
            <input
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Needs</label>
            <br />
            <input
              name="needs"
              placeholder="Needs"
              value={this.state.phoneNo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button className="submit-button">Submit Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;

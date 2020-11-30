import React, { Component } from "react";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      name: "",
      contact: "",
      description: "",
      needs: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const { title, name, contact, description, needs } = this.state;
    if (
      title === "" ||
      name === "" ||
      contact === "" ||
      description === "" ||
      needs === ""
    ) {
      alert("Please enter all fields!");
      return;
    }
    event.preventDefault();
    try {
      await fetch("http://localhost:5000/newpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      console.log("request was sent!");
    } catch (error) {
      console.error("Error:", error);
    }
    /* 
    alert(` 
      ____New Post Details____\n 
      Title : ${title} 
      Name : ${name} 
      Contact : ${contact} 
      Description : ${description} 
      Needs : ${needs} 
    `); */
    return;
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
              name="name"
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

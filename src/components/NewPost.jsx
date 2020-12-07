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
      tag1: "---",
      tag2: "---",
      tag3: "---",
      color: "#b0e2f1" // default color; should never be this color
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const { title, manager, contact, description, needs, tag1, tag2, tag3 } = this.state;
    if (
      title === "" ||
      manager === "" ||
      contact === "" ||
      description === "" ||
      needs === "" ||
      tag1 === "---" ||
      tag2 === "---" ||
      tag3 === "---"  
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
    this.setState({color: this.randomColor()});
  }

  randomColor() {
    let colors = ['#00ecff', '#ff0000', '#ff00e7', '#8900ff', '#0078ff', '#ff9a00',
                  '#17deee', '#ff7f50', '#00ff11', '#ff4162', '#f2e50b', '#21b20c',
                  '#0181bb', '#77dad5', '#ffe877', '#dede0e', '#f96e91', '#232d3b',
                  '#ff005c', '#00b1b9', '#ffa800', '#ffd32a', '#0ce881', '#48d0fa',
                  '#3d40c6', '#ff3f34'];                  
    return colors[Math.floor(Math.random() * colors.length)];
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="centered-form">
        <h1>New Project Post</h1>
        <p><b>Instructions:</b> Please fill out all of the following fields to create a new project post. In particular, please select 1 of each tag.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Project Title</label>
            <br />
            <input
              className="form_input"
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Manager Name</label>
            <br />
            <input
              className="form_input"
              name="manager"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Manager Contact</label>
            <br />
            <input
              className="form_input"
              name="contact"
              placeholder="Contact"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Description</label>
            <br />
            <textarea
              className="form_input"
              rows="5"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Project Needs</label>
            <br />
            <textarea 
              className="form_input"
              rows="5"
              name="needs"
              placeholder="Needs"
              value={this.state.phoneNo}
              onChange={this.handleChange}
            />
          </div>
          <div className="tags_dropdowns_container">
              <span className="tags_dropdowns_item">
                Languages&nbsp;
                <select className="tags_dropdown" name="tag1" value={this.state.tag1} onChange={this.handleChange}>
                    <option value="---">---</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="C/C++">C/C++</option>
                    <option value="HTML/CSS/JavaScript">HTML/CSS/JavaScript</option>
                    <option value="SQL">SQL</option>
                    <option value="Swift">Swift</option>
                    <option value="Objective C">Objective C</option>
                    <option value="C#">C#</option>
                </select> 
              </span>
              <span className="tags_dropdowns_item">
                Specification&nbsp;
                <select className="tags_dropdown" name="tag2" value={this.state.tag2} onChange={this.handleChange}>
                    <option value="---">---</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Web Dev">Web Dev</option>
                    <option value="Mobile/iOS">Mobile/iOS</option>
                    <option value="Low-Level">Low-Level</option>
                    <option value="Software Tools">Software Tools</option>
                    <option value="Security">Security</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                </select>  
              </span>
              <span className="tags_dropdowns_item">
                Category&nbsp;
                <select className="tags_dropdown" name="tag3" value={this.state.tag3} onChange={this.handleChange}>
                    <option value="---">---</option>
                    <option value="Just for fun">Just for fun</option>
                    <option value="For class">For class</option>
                    <option value="Start-up">Start-up</option>
                    <option value="Open-source">Open-source</option>
                </select>
              </span>
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

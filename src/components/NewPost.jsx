import React, { Component } from "react";

// component for new post, a separate page with a form for user input on a post
// user enters title, manager, contact, description, needs, and password
// user selects tags from a dropdown menu 
// time is autogenerated at submission time 
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
      passcode: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // confirms that all fields are filled, and if so sends a post request to the backend with the json file of all the post parameters 
  async handleSubmit(event) {
    const {
      title,
      manager,
      contact,
      description,
      needs,
      tag1,
      tag2,
      tag3,
      passcode,
    } = this.state;
    if (passcode.length !== 4) {
      alert("Please enter a valid 4-digit passcode");
      event.preventDefault();
      return;
    }
    if (
      title === "" ||
      manager === "" ||
      contact === "" ||
      description === "" ||
      needs === "" ||
      tag1 === "---" ||
      tag2 === "---" ||
      tag3 === "---" ||
      passcode === ""
    ) {
      alert("Please enter all fields!");
      event.preventDefault();
      return;
    }
    event.preventDefault();
    let d = new Date();
    let datetime = d.toUTCString();
    this.setState({ time: datetime }, () => {
      fetch("http://localhost:5000/newpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => {
          if (res.statusText === "OK") {
            alert("New post has been created");
            window.location = "http://localhost:3000/";
          }
        })
        .catch((error) => {
          alert(`Error: ${error}`);
        });
    });
  }

  // when data is inputed into the form, the associated state variables are updated
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // renders the various fields and associated input boxes
  render() {
    return (
      <div className="centered-form">
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="hatchegg">
            </div>
            </div>
        <h1>New Project Post 
          </h1>
        <p>
          <b>Instructions:</b> Please fill out all of the following fields to
          create a new project post. In particular, please select 1 of each tag.
        </p>
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
          {/* dropdown container for tag selection */}
          <div className="tags_dropdowns_container">
            <span className="tags_dropdowns_item">
              Languages&nbsp;
              <select
                className="tags_dropdown"
                name="tag1"
                value={this.state.tag1}
                onChange={this.handleChange}
              >
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
              <select
                className="tags_dropdown"
                name="tag2"
                value={this.state.tag2}
                onChange={this.handleChange}
              >
                <option value="---">---</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
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
              <select
                className="tags_dropdown"
                name="tag3"
                value={this.state.tag3}
                onChange={this.handleChange}
              >
                <option value="---">---</option>
                <option value="Just for fun">Just for fun</option>
                <option value="For class">For class</option>
                <option value="Start-up">Start-up</option>
                <option value="Open-source">Open-source</option>
              </select>
            </span>
          </div>
          <div>
            <label>
              Four-digit passcode to allow for post deletion and/or editing
            </label>
            <br />
            <input
              className="form_pass_input"
              name="passcode"
              placeholder="1234"
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

import React, { Component } from "react";

/* IMPORTANT 
PLEASE ONLY MODIFY THIS COMPONENT IN BRANCH POSTS
*/

class Post extends Component {
  /*
  state = {};
  render() {
    return (
      // PLEASE ADD CODE TO IMPLEMENT POSTS LAYOUT IN DIV POST //
      <div className="container">
        <h2>Hello World</h2>
      </div>
    );
  }*/
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "No Title",
      manager: props.manager || "No manager",
      contact: props.contact || "No contact info",
      description: props.description || "No description provided",
      needs: props.needs || "No needs provided",
      tags: props.tags || ["tag1", "tag2", "tag3"],
    };
  }

  render() {
    return (
      <div className="post-grid-container">
        <div className="post-photo">
          <div className="egg"></div>
        </div>
        <div className="post-title">
          <h2>{this.state.title}</h2>
        </div>
        <div className="post-manager-contact">
          <p>
            <span className="attribute">Manager:</span> {this.state.manager}
          </p>
          <p>
            <span className="attribute">Contact:</span> {this.state.contact}
          </p>
        </div>
        <div className="post-tags">
          {this.state.tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </div>
        <div className="post-description">
          <p className="attribute">Description:</p>
          <p>{this.state.description}</p>
        </div>
        <div className="post-needs">
          <p className="attribute">Needs:</p>
          <p>{this.state.needs}</p>
        </div>
      </div>
    );
  }
}

export default Post;
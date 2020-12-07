import React, { Component } from "react";

/* IMPORTANT 
PLEASE ONLY MODIFY THIS COMPONENT IN BRANCH POSTS
*/

class Post extends Component {
  /*
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
      time: props.time || "no time",
      id: props.id || "no id",
      upvote: props.upvote || 0,
    };
  }

  randomColor() {
    let colors = ['#00ecff', '#ff0000', '#ff00e7', '#8900ff', '#0078ff', '#ff9a00',
                  '#17deee', '#ff7f50', '#00ff11', '#ff4162', '#f2e50b', '#21b20c',
                  '#0181bb', '#77dad5', '#ffe877', '#dede0e', '#f96e91', '#232d3b',
                  '#ff005c', '#00b1b9', '#ffa800', '#ffd32a', '#0ce881', '#48d0fa',
                  '#3d40c6', '#ff3f34'];                  
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    return (
        <div className="post-grid-container">
          <div className="post-photo" style={{backgroundColor: this.randomColor()}}>
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
          <div className="post-votes">
            <div
              className="vote-arrow-up"
              onClick={() =>
                this.setState({
                  upvote: this.state.upvote + 1,
                })
              }
            />
            <div className="post-voteNum">{this.state.upvote}</div>
            <div
              className="vote-arrow-down"
              onClick={() =>
                this.setState({
                  upvote: this.state.upvote - 1,
                })
              }
            />
          </div>
          <h2>{this.state.time}</h2>
        </div>
    );
  }
}

export default Post;

import React, { Component } from "react";
import Delete from "./Delete";

/* IMPORTANT 
PLEASE ONLY MODIFY THIS COMPONENT IN BRANCH POSTS
*/

// post component used for each post, displays title, manager, description, needs, tags, and time from user input
// also displays a randomly generated color, an upvote/downvote counter, and a delete button
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "No Title",
      manager: props.manager || "No manager",
      contact: props.contact || "No contact info",
      description: props.description || "No description provided",
      needs: props.needs || "No needs provided",
      color: props.color || "none",
      tags: [props.tag1, props.tag2, props.tag3] || ["none"],
      time: props.time || "no time",
      id: props.id || "no id",
      upvote: props.upvote || 0,
      deletePopUp: false,
    };
  }

  // if delete button is clicked, the delete pop up will become visible
  popUpVisibility = () => {
    this.setState({
      deletePopUp: !this.state.deletePopUp,
    });
  };

  // renders each post and associated fields
  render() {
    return (
      <div>
        {/* if delete popup is supposed to be seen, div becomes visible */}
        {this.state.deletePopUp ? (
          <Delete visible={this.popUpVisibility} id={this.state.id} />
        ) : null}
        <div className="post-grid-container">
          <div
            className="post-photo"
            style={{ backgroundColor: this.state.color }}
          >
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
          <div id="post-bottom">
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
            <div className="post-time">
              <b>{this.state.time}</b>
            </div>
            <button className="post-trash" onClick={this.popUpVisibility}>
              {" "}
            </button>
            <a className="apply" href={"mailto:" + this.props.contact}>
              Apply
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

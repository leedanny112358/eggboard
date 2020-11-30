import React, { Component } from "react";
import Post from "./Post.jsx";

class Results extends Component {
  state = {
    posts: [],
  };
  render() {
    return (
      <div className="PostContainer">
        {this.state.posts.map((post) => (
          <Post
            title={post.title}
            manager={post.manager}
            contact={post.contact}
            description={post.description}
            needs={post.needs}
            tags={post.tags}
            time={post.time}
            id={post.id}
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }
}

export default Results;

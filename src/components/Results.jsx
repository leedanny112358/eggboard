import React, { Component } from "react";
import Post from "./Post.jsx";

class Results extends Component {
  state = {
    posts: [],
  };

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <Post
            title={post.title}
            manager={post.manager}
            contact={post.contact}
            description={post.description}
            needs={post.needs}
            tag1={post.tag1}
            tag2={post.tag2}
            tag3={post.tag3}
            time={post.time}
            id={post.id}
            color={this.randomColor()}
          />
        ))}
      </div>
    );
  }

  randomColor() {
    let colors = [
      "#00ecff",
      "#ff0000",
      "#ff00e7",
      "#8900ff",
      "#0078ff",
      "#ff9a00",
      "#17deee",
      "#ff7f50",
      "#00ff11",
      "#ff4162",
      "#f2e50b",
      "#21b20c",
      "#0181bb",
      "#77dad5",
      "#ffe877",
      "#dede0e",
      "#f96e91",
      "#232d3b",
      "#ff005c",
      "#00b1b9",
      "#ffa800",
      "#ffd32a",
      "#0ce881",
      "#48d0fa",
      "#3d40c6",
      "#ff3f34",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }
}

export default Results;

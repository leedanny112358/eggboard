import React, { Component } from "react";
import Post from "./Post.jsx";
import Filter from "./Filter.jsx";

class Results extends Component {
  state = {
    posts: [],
  };

  display() {
    let x = document.getElementById("filters");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.display()} className="filter-button">
          {" "}
          Filters
        </button>
        <Filter />
        {this.state.posts.reverse().map((post) => (
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
    if (window.location.search !== "") {
      fetch(`http://localhost:5000/filter${window.location.search}`)
        .then((response) => response.json())
        .then((data) => this.setState({ posts: data }));
    } else {
      fetch("http://localhost:5000/posts")
        .then((response) => response.json())
        .then((data) => this.setState({ posts: data }));
    }
  }
}

export default Results;

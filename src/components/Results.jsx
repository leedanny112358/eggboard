import React, { Component } from "react";
import Post from "./Post.jsx";
import Filter from "./Filter.jsx";

// renders the posts on the homepage
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

  // randomize colors of eggs
  randomColor() {
    let colors = [
      "#ffcccc",
      "#ffccdd",
      "#ffccee",
      "#ffccff",
      "#ccccff",
      "#ccccee",
      "#ccffcc",
      "#ffffcc",
      "#ffddcc",
      "#ffaadd",
      "#ccaaff",
      "#ccffdd",
      "#ccffff",
      "#ffb5e8",
      "#aff808",
      "#bffcc8",
      "#c4faf8",
      "#afcbff",
      "#ace7ff",
      "#fcc2ff",
      "#ffbebc",
      "#ffcbc1",
      "#fff58a",
      "#e7ffac",
      "#d5aaff",
      "#ecd4ff",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // renders either all posts or filtered posts
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

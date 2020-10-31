import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="header">
        <h1>
          <span style={{ color: "#EBF38F" }}>egg</span>board
        </h1>
        <button>+ New Project</button>
      </nav>
    );
  }
}

export default Header;

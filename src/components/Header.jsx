import React, { Component } from "react";
import { Link } from "react-router-dom";


// header component for eggboard logo and new post button
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="header">
        <Link to="/" className="logo">
          <span style={{ color: "#EBF38F" }}>egg</span>board
        </Link>
        <Link to="/newpost">
          <button className="new-project-button">+ New Project</button>
        </Link>
      </nav>
    );
  }
}

export default Header;

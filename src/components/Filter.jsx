import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return(
      <div id="filters"> 
        <div className="filter-grid-container">
          <button className="filter-grid-item-lang">Java</button>
          <button className="filter-grid-item-lang">Python</button>
          <button className="filter-grid-item-lang">C/C++</button>
          <button className="filter-grid-item-lang">HTML/CSS/JavaScript</button>
          <button className="filter-grid-item-lang">SQL</button>
          <button className="filter-grid-item-lang">Swift</button>
          <button className="filter-grid-item-lang">Objective C</button>
          <button className="filter-grid-item-lang">C#</button>
          <button className="filter-grid-item-spec">Back-End</button>
          <button className="filter-grid-item-spec">Front-End</button>
          <button className="filter-grid-item-spec">Web Dev</button>
          <button className="filter-grid-item-spec">Mobile/iOS</button>
          <button className="filter-grid-item-spec">Low-Level</button>
          <button className="filter-grid-item-spec">Software Tools</button>
          <button className="filter-grid-item-spec">Security</button>
          <button className="filter-grid-item-spec">Cloud Computing</button>
          <button className="filter-grid-item-cat">Just for fun</button>
          <button className="filter-grid-item-cat">For class</button>
          <button className="filter-grid-item-cat">Start-up</button>
          <button className="filter-grid-item-cat">Open source</button>
          <button className="filter-go"> Go </button>
        </div>
      </div>
      );
  }
}

export default Filter;

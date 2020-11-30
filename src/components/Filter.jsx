import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return(
      <div id="filters"> 
        <div className="filter-grid-container">
          <div className="filter-grid-item-lang">Java</div>
          <div className="filter-grid-item-lang">Python</div>
          <div className="filter-grid-item-lang">C/C++</div>
          <div className="filter-grid-item-lang">HTML/CSS/JavaScript</div>
          <div className="filter-grid-item-lang">SQL</div>
          <div className="filter-grid-item-lang">Swift</div>
          <div className="filter-grid-item-lang">Objective C</div>
          <div className="filter-grid-item-lang">C#</div>
          <div className="filter-grid-item-spec">Back-End</div>
          <div className="filter-grid-item-spec">Front-End</div>
          <div className="filter-grid-item-spec">Web Dev</div>
          <div className="filter-grid-item-spec">Mobile/iOS</div>
          <div className="filter-grid-item-spec">Low-Level</div>
          <div className="filter-grid-item-spec">Software Tools</div>
          <div className="filter-grid-item-spec">Security</div>
          <div className="filter-grid-item-spec">Cloud Computing</div>
          <div className="filter-grid-item-cat">Just for fun</div>
          <div className="filter-grid-item-cat">For class</div>
          <div className="filter-grid-item-cat">Start-up</div>
          <div className="filter-grid-item-cat">Open source</div>
        </div>
      </div>
      );
  }
}

export default Filter;

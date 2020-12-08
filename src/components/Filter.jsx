import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: Array(),
    };
  }
  handleClick(tag) {
    var current = this.state.selected;
    let index = current.indexOf(tag + ', ');
    if (index === -1) {
      current.push(tag + ', ');
    } else {
      current.splice(index, 1);
    }
    this.setState({
      selected: current,
    });
  }

  render() {
    return(
      <div id="filters"> 
        <div className="filter-label">Languages</div>
        <div className="filter-grid-container">
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("Java", e)}>Java</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("Python", e)}>Python</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("C/C++", e)}>C/C++</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("HTML/CSS/JavaScript", e)}>HTML/CSS/JavaScript</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("SQL", e)}>SQL</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("Swift", e)}>Swift</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("Objective C", e)}>Objective C</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClick("C#", e)}>C#</button>
        </div>
        <div className="filter-label">Specification</div>
        <div className="filter-grid-container">
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Backend", e)}>Backend</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Frontend", e)}>Frontend</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Web Dev", e)}>Web Dev</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Mobile/iOS", e)}>Mobile/iOS</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Low-Level", e)}>Low-Level</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Software Tools", e)}>Software Tools</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Security", e)}>Security</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClick("Cloud Computing", e)}>Cloud Computing</button>
        </div>
        <div className="filter-label">Category</div>
        <div className="filter-grid-container">
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClick("Just for fun", e)}>Just for fun</button>
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClick("For class", e)}>For class</button>
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClick("Start-up", e)}>Start-up</button>
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClick("Open source", e)}>Open source</button>
        </div>
        <div className="filter-selected">{this.state.selected}</div>
        <div className="filter-grid-container-2">
          <button className="filter-go"> Go </button>
        </div>
      </div>
      );
  }
}

export default Filter;

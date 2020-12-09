import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag1: null,
      tag2: null,
      tag3: null,
    };
  }
  handleClickLang(tag) {
    if (tag === this.state.tag1) {
      this.setState({
        tag1: null,
      });
    } else {
      this.setState({
        tag1: tag,
      });
    }
  }
  handleClickSpec(tag) {
    if (tag === this.state.tag2) {
      this.setState({
        tag2: null,
      });
    } else {
      this.setState({
        tag2: tag,
      });
    }
  }
  handleClickCat(tag) {
    if (tag === this.state.tag3) {
      this.setState({
        tag3: null,
      });
    } else {
      this.setState({
        tag3: tag,
      });
    }
  }

  handleClickGo(e) {
    e.preventDefault();
    var tag1 = this.state.tag1;
    var tag2 = this.state.tag2;
    var tag3 = this.state.tag3;
    // note that no tag options for tag1 contain spaces
    tag2 = tag2.replace(/ /g, '%20');
    tag3 = tag3.replace(/ /g, '%20');
    var query = "tag1=" + tag1 + "&tag2=" + tag2 + "&tag3=" + tag3;
    fetch(`http://localhost:5000/filter?${query}`)
      // TO DO
      .then((res) =>)

  }

  render() {
    var selected = null;
    var output = null;
    var tag1 = this.state.tag1;
    var tag2 = this.state.tag2;
    var tag3 = this.state.tag3;
    if (tag1 === null && tag2 && tag3) { 
      selected = tag2 + " or " + tag3;
    } else if (tag2 === null && tag1 && tag3) { 
      selected = tag1 + " or " + tag3;
    } else if (tag3 === null && tag1 && tag2) { 
      selected = tag1 + " or " + tag2;
    } else if (tag1 === null && tag2 === null && tag3) { 
      selected = tag3;
    } else if (tag1 === null && tag3 === null && tag2) { 
      selected = tag2;
    } else if (tag3 === null && tag2 === null && tag1) { 
      selected = tag1;
    } else if (tag1 && tag2 && tag3) {
      selected = tag1 + ", " + tag2 + ", or " + tag3;
    }
    if (selected) {
      output = "Find posts with tag(s): " + selected;
    }

    return(
      <div id="filters"> 
        <div className="filter-label">Languages </div>
        {/* <div className="filter-selected">Selected: {this.state.tag1}</div> */}
        <div className="filter-grid-container">
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("Java", e)}>Java</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("Python", e)}>Python</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("C/C++", e)}>C/C++</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("HTML/CSS/JavaScript", e)}>HTML/CSS/JavaScript</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("SQL", e)}>SQL</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("Swift", e)}>Swift</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("Objective C", e)}>Objective C</button>
          <button className="filter-grid-item-lang" onClick={(e) => this.handleClickLang("C#", e)}>C#</button>
        </div>
        <div className="filter-label">Specification</div>
        {/* <div className="filter-selected">Selected: {this.state.tag2}</div> */}
        <div className="filter-grid-container">
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Backend", e)}>Backend</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Frontend", e)}>Frontend</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Web Dev", e)}>Web Dev</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Mobile/iOS", e)}>Mobile/iOS</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Low-Level", e)}>Low-Level</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Software Tools", e)}>Software Tools</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Security", e)}>Security</button>
          <button className="filter-grid-item-spec" onClick={(e) => this.handleClickSpec("Cloud Computing", e)}>Cloud Computing</button>
        </div>
        <div className="filter-label">Category</div>
        {/* <div className="filter-selected">Selected: {this.state.tag3}</div> */}
        <div className="filter-grid-container">
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClickCat("Just for fun", e)}>Just for fun</button>
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClickCat("For class", e)}>For class</button>
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClickCat("Start-up", e)}>Start-up</button>
          <button className="filter-grid-item-cat" onClick={(e) => this.handleClickCat("Open source", e)}>Open source</button>
        </div>
        <div className="filter-selected">{output}</div>
        <div className="filter-grid-container-2">
          <button className="filter-go"> Go </button>
        </div>
      </div>
      );
  }
}

export default Filter;

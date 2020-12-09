import Header from "./components/Header.jsx";
import NewPost from "./components/NewPost.jsx";
import Filter from "./components/Filter.jsx";
import Results from "./components/Results.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function display() {
  let x = document.getElementById("filters");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/">
            <div className="container">
              <button onClick={() => display()} className="filter-button">
                {" "}
                Filters
              </button>
              <Filter />
              <Results />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

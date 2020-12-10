import Header from "./components/Header.jsx";
import NewPost from "./components/NewPost.jsx";
import Results from "./components/Results.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
              <Results />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

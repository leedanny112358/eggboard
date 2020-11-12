import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import NewPost from "./components/NewPost.jsx";
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
            <Post />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

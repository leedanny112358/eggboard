import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import NewPost from "./components/NewPost.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

/* const testposts = [
  { title: 'Post 1', manager: 'Jonathan Joestar', contact: 'firstjojo@gmail.com', description: 'I am making a cool project.', needs: 'I need hamon users', tags: ['Web App', 'MERN', 'Flexible'] },
  { title: 'Post 2', manager: 'Joseph Joestar', contact: 'coolestjojo@gmail.com', description: 'I am making a cool project.', needs: 'I need hamon users', tags: ['Mobile App', 'React Native'] },
  { title: 'Post 3', manager: 'Jotaro Kujo', contact: 'starplatinum@gmail.com', needs: 'Stand users only.', tags: ['Web App'] },
  { title: 'Post 4', manager: 'Josuke Higashikata' },
  { title: 'Post 5', manager: 'Giorno Giovanna' },
  { title: 'Post 6', manager: 'Jolyne Kujo' },
  { title: 'Post 7', manager: 'Johnny Joestar' },
]; */

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
            {/* <div className="PostContainer"> { testposts.map((post) => <Post title={post.title} manager={post.manager} contact={post.contact} description={post.description} needs={post.needs} tags={post.tags} />) } </div> */}
            <Post />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./page/Home"
import Post from "./page/Post"
import Login from "./page/Login"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/post" component={Post} />
        <Route exact path="/login" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;

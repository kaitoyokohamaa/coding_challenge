import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Home } from "../src/Components/Pages/Home";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} component={Home} path="/" />
      </Switch>
    </Router>
  );
};

export default App;

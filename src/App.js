import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Fragment>
          <Router>
            <Navbar />

            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users/:login" component={User} />
              </Switch>
            </div>
          </Router>
        </Fragment>
      </AlertState>
    </GithubState>
  );
};

export default App;

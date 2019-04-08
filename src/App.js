import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

import Home from "./Home";
import History from "./History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Router</h1>

          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;

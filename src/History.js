import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class History extends Component {
  render() {
    return (
      <div>
        <NavLink to="/"> Accueil </NavLink><br />
        <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>
        <h2>Notre histoire</h2>
      </div>
    );
  }
}

export default History;
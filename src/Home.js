import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="selected"> Accueil </NavLink><br /> 
        <NavLink to="/notre-histoire"> Notre histoire </NavLink>
        <h2>Bienvenue sur l'Accueil</h2>
      </div>
    );
  }
}

export default Home;

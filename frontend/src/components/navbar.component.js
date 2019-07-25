import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-secondary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Tradequity</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/live" className="nav-link">Live Stock Market</Link>
          </li>
          <li className="navbar-item">
          <Link to="/predict" className="nav-link">Predict Stock Price</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Log In</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
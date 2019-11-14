import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

 class Navbar extends Component {

  logOut(e){
    e.preventDefault();
    sessionStorage.removeItem('usertoken');
    this.props.history.push('/');
  }

  render() {
    const loginSignUpLink = (
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/live" className="nav-link">Live Stock Market</Link>
        </li>
        <li className="navbar-item">
        <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li className="navbar-item">
        <Link to="/login" className="nav-link">Log In</Link>
        </li>
      </ul>
    );

    const userLoggedIn = (
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/live" className="nav-link">Live Stock Market</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mys" className="nav-link">Manage Your Stock</Link>
        </li>
        <li className="navbar-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
         
      </ul>


    )
    return (
      <nav className="navbar navbar-dark bg-secondary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Tradequity</Link>
        <div className="collpase navbar-collapse">
          {sessionStorage.usertoken ? userLoggedIn: loginSignUpLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
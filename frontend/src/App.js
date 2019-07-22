import React from 'react';
import logo from './logo1.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import LogIn from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={LogIn} />
    </Router>
  );
}

export default App;

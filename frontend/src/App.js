import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import LogIn from "./components/login.component";
import SignUp from "./components/signup.component";
import LivePrice from "./components/live.component";
import Predict from "./components/predict.component"

function App() {
  return (

      <Router>
      <Navbar />
      <br/>
      <Route path="/live" exact component={LivePrice} />
      <Route path="/signup" exact component={SignUp} />   

      <Route path="/login" exact component={LogIn} />
      <Route path="/predict" exact component={Predict} />
      </Router>
    
   
  );
}

export default App;

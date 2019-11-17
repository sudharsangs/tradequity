import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import SignUp from "./components/signup";
import LivePrice from "./components/live";
import Home from "./components/hometext";
import Manage from"./components/StocksOwned";
import Admin from "./components/admin";


function App() {
  return (

      <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/live" exact component={LivePrice} />
      <Route path="/signup" exact component={SignUp} />   
      <Route path="/admin" exact component={Admin} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/mys" render={() => <div><p>     Please Login To Manage Your Stock</p></div> } exact component={Manage} />
      </Router>
    
   
  );
}

export default App;

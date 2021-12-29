import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import background from "./images/pawel-czerwinski-background-pattern.jpg"


import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return(
  <div className= "whole-page-container"  style={{ backgroundImage: `url(${background})` }}>
    <Router >
      <Header/>
      <Switch>
        <Route exact path = "/" component = {Welcome}/>
        <Route exact path = "/aboutMe" component = {About}/>
        <Route exact path = "/portfolio" component = {Portfolio}/>
        <Route exact path = "/contact" component ={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  </div>);
}

export default App;

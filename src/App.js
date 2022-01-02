import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import background from "./images/pawel-czerwinski-background-pattern.jpg"


import Header from "./components/Header";
import Welcome from "./Pages/Welcome";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return(
  <div className= "whole-page-container"  style={{ backgroundImage: `url(${background})` }}>
    <Router >
      <Header/>
      <div className= "content-container">
      <Switch >
        <Route exact path = "/" component = {About}/>
        <Route exact path = "/aboutMe" component = {About}/>
        <Route exact path = "/portfolio" component = {Portfolio}/>
        <Route exact path = "/resume" component= {Resume}/>
        <Route exact path = "/contact" component ={Contact}/>
      </Switch>
      </div>
      <Footer/>
    </Router>
  </div>);
}

export default App;

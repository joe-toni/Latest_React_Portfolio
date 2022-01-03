import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//We start by bringing in the background image we will use for the overall site.
import background from "./images/pawel-czerwinski-background-pattern.jpg"

//Here we are brining in all the react components we will be using to form our frame and rendure the content for different pages.
import Header from "./components/Header";
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

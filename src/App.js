import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return(<Router>
    <Header/>
    <Switch>
      <Route exact path = "/" component= {Welcome}/>
      <Route exact path = "/aboutMe" component= {About}/>
    </Switch>
    <Footer/>
  </Router>);
}

export default App;

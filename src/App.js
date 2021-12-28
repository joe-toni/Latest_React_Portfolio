import React, {useState, useEffect} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return(
    <div className = "app-container">
    <Header/>
    <p>This is sample filler to test out the locally deployed site</p>
    <Footer/>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import './app.scss';
// import Navigation from './components/Navigation';
import Topbar from "./components/topbar/topbar";
import About from "./components/About/about";
import Resume from './components/Resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {

  return (
    <div className="app">
      <Topbar></Topbar>
      <div className="sections">
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>  
      </div>
      <div className="footer">
      <Footer></Footer>  
      </div>
      </div>  
  )
}

export default App;

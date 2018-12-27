import React, { Component } from 'react';

import Header from './Components/Header/Header';
import JumboTron from './Components/JumboTron/JumboTron';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Favicon from 'react-favicon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Favicon url="./assets/Images/favicon-16X16.png"/>
      <Header/>
      <JumboTron/>
      <AboutMe/>
      <Skills/>
      <MyWork/>
      <Contact/>
       
      </div>
    );
  }
}

export default App;

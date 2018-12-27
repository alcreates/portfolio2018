import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header';
import JumboTron from './Components/JumboTron/JumboTron';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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

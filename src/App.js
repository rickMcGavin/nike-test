import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import HeroContent from './components/HeroContent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <HeroContent />
      </div>
    );
  }
}

export default App;

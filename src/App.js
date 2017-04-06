import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import HeroContent from './components/HeroContent.js';
import Shoe from './components/Shoe.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <HeroContent />
        <Shoe />
      </div>
    );
  }
}

export default App;

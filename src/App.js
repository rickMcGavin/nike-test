import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroContent from './components/HeroContent';
import Shoe from './components/Shoe';
import ShoeContent from './components/ShoeContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <HeroContent />
        <Shoe />
        <ShoeContent />
      </div>
    );
  }
}

export default App;

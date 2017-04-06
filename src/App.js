import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialCard from './SocialCard/SocialCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Social Cards</h1>
        </header>
        <SocialCard />
      </div>
    );
  }
}

export default App;

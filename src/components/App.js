import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header.js';
import MainLogic from './MainLogic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainLogic/>
      </div>
    );
  }
}

export default App;

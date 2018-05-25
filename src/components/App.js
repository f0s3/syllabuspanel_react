import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <p>Header</p>
  )}
}


export default App;

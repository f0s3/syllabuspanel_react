import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
	      <div>Syllabus Admin Panel</div>
	      <div id="account-label">You are logged in as:</div>
      </div>

  )}
}

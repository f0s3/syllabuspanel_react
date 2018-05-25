import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/AddOrRemoveGroup.css';

class AddOrRemoveGroup extends Component {
  render() {
    return (
      <div className="AddOrRemoveGroup">
      	<AddGroup/>
      	<RemoveGroup/>
      </div>
    );
  }
}

export default App;
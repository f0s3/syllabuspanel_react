import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/AddOrRemoveGroup.css';
import AddGroup from './AddGroup';
import RemoveGroup from './RemoveGroup';

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

export default AddOrRemoveGroup;

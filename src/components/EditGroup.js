import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/EditGroup.css';

class EditGroup extends Component {
  render() {
    return (
      <div className="EditGroup">
      	<div>Edit Group or subgroup info</div>
      	<div>
      		<label>Enter group name</label><input type="text"/>
      	</div>
      </div>
    );
  }
}

export default EditGroup;

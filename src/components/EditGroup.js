import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/EditGroup.css';

class EditGroup extends Component {
  render() {
    return (
      <div className="EditGroup">
      	<div className="header-2-label">Edit Group or subgroup info</div>
      	<div>
      		<label>Enter group name</label><input type="text" class="form-control"/>
      	</div>
      </div>
    );
  }
}

export default EditGroup;

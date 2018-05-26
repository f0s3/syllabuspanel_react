import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/MainLogic.css';
import EditGroup from './EditGroup';
import AddOrRemoveGroup from './AddOrRemoveGroup';

class MainLogic extends Component {
  render() {
    return (
      <div className="MainLogic">
        <EditGroup/>
        <AddOrRemoveGroup/>
      </div>
    );
  }
}

export default MainLogic;

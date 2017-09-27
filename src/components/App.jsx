import React from 'react';
import TaskList from './Tasks';
// import Menu from './Menu';
// import Header from './Header';

require('./styles/App.scss');

export default class App extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
    this.state._children = props.children || [];
  }

  render() {
    return (
      <div className="taskapp">
        {this.state._children}
      </div>
    );
  }
}

export function createUUID() {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

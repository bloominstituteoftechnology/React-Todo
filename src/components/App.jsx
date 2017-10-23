import React, { Component } from 'react';
import TaskList from './TaskList.jsx';

export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="app">
        <TaskList tasks={this.props.tasks} />
    </div>
    );
  }
}

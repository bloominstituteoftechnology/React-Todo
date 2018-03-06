import React, { Component } from "react";
import TaskList from "./TaskList.jsx";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.props.tasks} />
      </div>
    );
  }
}

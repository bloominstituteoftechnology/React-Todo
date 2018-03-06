import React, { Component } from "react";
import Task from "./Task.jsx";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tasklist">
        <ul>
          {this.props.tasks.map(task => {
            return (
              <li>
                <Task {...task} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

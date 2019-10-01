// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";
import "./Todo.css";

import FlipMove from "react-flip-move";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {this.props.items.map(item => (
            <Todo
              key={item.key}
              item={item}
              toggleComplete={this.props.toggleComplete}
            />
          ))}
        </FlipMove>
      </ul>
    );
  }
}

import React from "react";
import "./Todo.css";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export class TodoList extends React.Component {
  render() {
    return (
      <div className="display">
        {this.props.todos.map((todo, index) => {
          return (
            <div
              key={todo.id}
              id={todo.id}
              style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}
              className="list todo-list"
              onClick={() => this.props.toggleCompleted(todo.id)}>
              {todo.text} <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  render() {
    const todoHandler = props => {
      this.props.clickHandler(this.props.todo.id);

      localStorage.setItem('task', JSON.stringify(this.props.todo.task));
      localStorage.setItem('id', JSON.stringify(this.props.todo.id));
      localStorage.setItem('completed', JSON.stringify(!this.props.todo.completed));
      localStorage.setItem('todo', JSON.stringify(this.props.todo));
    };

    return (
      <li
        className={this.props.todo.completed ? "completedTask" : null}
        onClick={todoHandler}
      >
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;

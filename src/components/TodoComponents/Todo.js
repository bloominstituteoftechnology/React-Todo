import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <div
        className={"todo-item" + (todo.completed ? " completed" : "")}
        onClick={this.toggleTodo}
      >
        {todo.text}
      </div>
    );
  }

  toggleTodo = () => {
    this.props.updateTodo(this.props.todo);
  };
}

export default Todo;

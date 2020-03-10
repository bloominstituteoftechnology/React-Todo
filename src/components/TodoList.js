import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(item => (
          <Todo
            key={item.id}
            task={item.task}
            // completed={item.completed}
            toggleCompleted={this.props.toggleCompleted}
          />
        ))}
        <TodoForm addTodo={this.props.addTodo} />
      </div>
    );
  }
}

export default TodoList;

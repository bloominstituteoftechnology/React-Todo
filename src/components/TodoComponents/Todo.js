import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Todo extends Component {
  state = { todos: JSON.parse(window.localStorage.getItem("todos")) || [] };

  addHandler = todo => {
    let newTodos = [...this.state.todos];
    newTodos = [...newTodos, todo];
    this.setState({ todos: newTodos });
    window.localStorage.getItem("todos", JSON.stringify(this.state.todos));
  };

  markCompletedHandler = id => {
    const todo_target = this.state.todos.filter(el => el.id === id)[0];
    const todo_target_parent = Array.from(document.querySelectorAll("li")).find(
      el => el.textContent === todo_target.todoValue
    );
    if (todo_target.complete === false) {
      todo_target.complete = true;
      todo_target_parent.style.textDecoration = "line-through";
    } else if (todo_target.complete === true) {
      todo_target.complete = false;
      todo_target_parent.style.textDecoration = "none";
    }
  };

  clearHandler = () => {
    let todo_left = this.state.todos.filter(el => el.complete === false);
    this.setState({ todos: todo_left });
  };

  render() {
    return (
      <div>
        <TodoForm onAdd={this.addHandler} />
        <TodoList
          todos={this.state.todos}
          markCompleted={this.markCompletedHandler}
        />
        <button onClick={this.clearHandler}>Clear completed</button>
      </div>
    );
  }
}

export default Todo;

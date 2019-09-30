import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Todo extends Component {
  state = { todos: [], completeds: [] };

  addHandler = todo => {
    let newTodos = [...this.state.todos];
    newTodos = [...newTodos, todo];
    this.setState({ todos: newTodos });
  };

  markCompletedHandler = todo => {
    const todo_target = this.state.todos.filter(el => el === todo)[0];
    const el_target = Array.from(document.querySelectorAll("li")).find(
      el => el.textContent === todo_target
    );
    el_target.style.textDecoration = "line-through";
    let newCompleted = [...this.state.completeds];
    newCompleted = [...newCompleted, todo_target];
    this.setState({ completeds: newCompleted });
  };

  clearHandler = () => {
    let todo_left = this.state.todos.filter(
      el => !this.state.completeds.includes(el)
    );
    this.setState({ todos: todo_left });
    console.log(todo_left);
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

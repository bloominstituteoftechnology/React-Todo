import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
    let todos = this.getLocalStorage();
    this.state = {
      todos,
      newTodo: ""
    };
  }

  getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  setLocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  toggleStatus = index => {
    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({ todos, newTodo: "" });
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    let todo = { text: this.state.newTodo, completed: false };
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos, newTodo: "" });
    this.setLocalStorage(todos);
  };

  removeTodo = index => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos, newTodo: "" });
    this.setLocalStorage(todos);
  };
  render() {
    return (
      <div className="todolist">
        <form onSubmit={this.addTodo}>
          <input
            className="inputBox"
            type="text"
            placeholder="New Todo"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
        </form>
        {this.state.todos.map((item, index) => {
          return (
            <Todo
              toggleStatus={this.toggleStatus}
              key={index}
              todo={item}
              index={index}
              removeTodo={this.removeTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;

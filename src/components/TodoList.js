import React from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {
  state = {
    newTodo: "",
    todos: []
  };

  todoElements = () => this.state.todos.map((todo, i) => (
    <div key={i} className="todo-list__entry">
      <Todo {...todo} />
      <button id={i} onClick={this.handleDelete}>✖</button>
    </div>
  ));

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  addTodo = (event) => {
    const todos = this.state.todos.concat({ 
      text: this.state.newTodo, 
      completed: false 
    });
    this.setState({ todos: todos, newTodo: "" }, this.updateLocalStorage);
    event.preventDefault();
  }

  handleDelete = (event) => {
    const todos = this.state.todos;
    todos.splice(event.target.id, 1);
    this.setState({ todos: todos }, this.updateLocalStorage);
  }

  componentDidMount = () => {
    const localStorage = window.localStorage;
    if (localStorage !== undefined) {
      const todos = localStorage.getItem("todos");
      if (todos !== undefined) {
        this.setState({ todos: JSON.parse(todos) });
      }
    }
  }

  componentWillUnmount = () => {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    const localStorage = window.localStorage;
    if (localStorage !== undefined) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  render = () => {
    return (
      <div className="todo-container">
        <div className="todo-list">
          {this.todoElements()}
        </div>
        <form onSubmit={this.addTodo}>
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleChange} />
          <input
            type="submit"
            value="Add Todo" />
        </form>
      </div>
    );
  };
}
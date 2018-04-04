import React, {Component} from 'react';
import Todo from './Todo.js';


class TodoList extends Component {
  state = {
    inputValue: "",
    todos: []
  };

  todoElements = () => this.state.todos.map((todo, i) => (
    <div key={i} className="todo-list__entry">
      <Todo {...todo} />
      <button id={i} onClick={this.handleDelete}>✖</button>
    </div>
  ));

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    const todos = this.state.todos.concat({ 
      text: this.state.inputValue, 
      completed: false 
    });
    this.setState({ todos: todos, inputValue: "" }, this.updateLocalStorage);
    event.preventDefault();
  }

  handleDelete = (event) => {
    const todos = this.state.todos;
    todos.splice(event.target.id, 1);
    this.setState({ todos: todos }, this.updateLocalStorage);
  }

  componentDidMount = () => {
    const todos = window.localStorage.getItem("todos");
    if (todos !== undefined) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  componentWillUnmount = () => {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render = () => {
    return (
      <div className="todo-container">
        <div className="todo-list">
          {this.todoElements()}
        </div>
        <form onSubmit={this.handleSubmit}>
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


export default TodoList;
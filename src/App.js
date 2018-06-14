import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    todoInput: "",
    todos: []
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.todoInput === "") {
      return;
    }
    const task = this.state.todoInput;
    const id = Date.now();
    const newTodo = { task: task, id: id, completed: false };
    let todos = this.state.todos.slice();
    todos.push(newTodo);
    this.setState({ todos: todos, todoInput: "" });
  };

  changeTodoInput = event => {
    this.setState({ todoInput: event.target.value })
  }

  toggleCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      todo.id === id ? todo.completed = !todo.completed : null;
      return todo;
    });
    this.setState({ todos: todos });
  }

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed)
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="container">
        <div className="form-and-list-container">
          <TodoForm addTodo={this.addTodo}
                    todoInput={this.state.todoInput}
                    clearCompleted={this.clearCompleted}
                    changeTodoInput={this.changeTodoInput} />
          <TodoList todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted} />
        </div>
      </div>
    );
  }
}

export default App;

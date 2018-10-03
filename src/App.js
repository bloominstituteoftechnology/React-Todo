import React from 'react';
import './App.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    }
  }
  inputChange = e => {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  }
  addTodo = e => {
    e.preventDefault();
    this.setState({ 
      todos: [...this.state.todos, {task: this.state.todo, id: Date.now(), completed: false}],
      todo: '' 
    });
  }
  clearTodo = e => {
    e.preventDefault();
    let filteredTodos = this.state.todos.filter(todo => todo.completed === false);
    this.setState({ todos: filteredTodos });
  }
  render() {
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos}/>
        <TodoForm 
          inputChange={this.inputChange} 
          addTodo={this.addTodo} 
          clearTodo={this.clearTodo}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;

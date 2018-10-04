import React from 'react';
import './App.css'
import TodoSearch from './components/TodoComponents/TodoSearch';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: '',
      search: '',
      storedTodos: []
    }
  }
  inputChange = e => {
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
  handleSearch = e => {
    this.setState({ search: e.target.value, storedTodos: this.state.todos })
    if (e.target.value) {
      let filteredTodos = this.state.todos.filter(todo => todo.task.indexOf(e.target.value) > -1);
      this.setState({ todos: filteredTodos });
    } else {
      this.setState({ todos: this.state.storedTodos });
    }
  }
  render() {
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoSearch search={this.state.search} handleSearch={this.handleSearch} />
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

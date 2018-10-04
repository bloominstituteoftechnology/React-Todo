import React from 'react';
import './App.css'
import TodoSearch from './components/TodoComponents/TodoSearch';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let initialTodos;
localStorage.getItem('todos') ? initialTodos = JSON.parse(localStorage.getItem('todos')) : initialTodos = []; 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
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
    if (this.state.todo) {
      let newTodos = [...this.state.todos, {task: this.state.todo, id: Date.now(), completed: false}];
      this.setState({ 
        todos: newTodos,
        todo: '' 
      });
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  }
  clearTodo = e => {
    e.preventDefault();
    let filteredTodos = this.state.todos.filter(todo => todo.completed === false);
    this.setState({ todos: filteredTodos });
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
  }
  render() {
    let filteredTodos = this.state.todos.filter(todo => todo.task.indexOf(this.state.search) !== -1)
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoSearch search={this.state.search} handleSearch={this.inputChange} />
        <TodoList todos={filteredTodos}/>
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

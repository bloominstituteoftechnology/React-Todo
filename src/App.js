import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    const localStorage = window.localStorage.getItem("todos")
    localStorage !== "null" && this.setState({ todos: JSON.parse(localStorage) })
  }

  componentDidUpdate() {
    window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

  handleAddTodo = (desc) => {
    const newTodo =  { desc, id: Date.now(), completed: false }
    if (this.state.todos === []) {
      this.setState({ todos: [newTodo]})
      return
    }
    this.setState({ todos: [...this.state.todos, newTodo ]})
  }

  handleMarkCompleted = (id) => {
    const updatedState = this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo)
    this.setState({ todos: updatedState })

  }

  handleClearCompleted = () => {
    const updatedState = this.state.todos.filter(todo => todo.completed === false)
    console.log(updatedState)
    this.setState({ todos: updatedState })
  }

  setSearchTerm = (e) => {
    e.preventDefault()
    this.setState({ searchTerm: e.target.value })
  }
  render() {
    const searchRes = this.state.todos !== [] && this.state.todos.filter(todo => todo.desc.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={searchRes} handleMarkCompleted={this.handleMarkCompleted} handleClearCompleted={this.handleClearCompleted}/>
        <TodoForm handleAddTodo={this.handleAddTodo} />
        <TodoSearch setSearchTerm={this.setSearchTerm} searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;

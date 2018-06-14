import React, { Component } from 'react'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      task: '',
      todos: []
    }
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { todos, task } = this.state
    this.setState({
      todos: [ { task: task, id: Date.now(), completed: false }, ...todos ],
      task: ''
    })
  }

  handleClick = (search) => {
    const filteredTodos = this.state.todos.map((todo) => {
      if (todo.id === search.id) todo.completed = !todo.completed
      return todo
    })
    this.setState({
      todos: filteredTodos
    })
  }

  clearTodos = () => {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.completed === false
    })
    this.setState({
      todos: newTodos
    })
    console.log(newTodos)
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render () {
    return (
      <div>
        <h2>The ToDo List</h2>
        <TodoForm
          task={this.state.task}
          todoarray={this.state.todos}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          handleremove={this.clearTodos}
        />
        <TodoList
          todoArray={this.state.todos}
          task={this.state.task}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App

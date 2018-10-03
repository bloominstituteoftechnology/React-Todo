import React, { Component } from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './reset.css'
import './app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      value: ''
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.value,
          id: Date.now(),
          completed: false
        }
      ],
      value: ''
    })
  }

  completeTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.map(
          todo => (todo.id === id ? { ...todo, completed: true } : todo)
        )
      ]
    })
  }

  removeCompletedTodos = event => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.completed === false)]
    })
  }

  render() {
    const { todos, value } = this.state
    const {
      handleChange,
      handleSubmit,
      completeTodo,
      removeCompletedTodos
    } = this

    return (
      <div className="container">
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          removeCompletedTodos={removeCompletedTodos}
          value={value}
        />
        <TodoList todos={todos} completeTodo={completeTodo} />
      </div>
    )
  }
}

export default App

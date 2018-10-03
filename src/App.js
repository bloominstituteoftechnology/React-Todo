import React, { Component } from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

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
    console.log('hi')
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

  render() {
    const { todos, value } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div>
        <TodoList todos={todos} />
        <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
      </div>
    )
  }
}

export default App

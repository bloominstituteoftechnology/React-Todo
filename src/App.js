import React, { Component } from 'react'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      task: '',
      Todos: [
        {
          task: '',
          id: Date.now(),
          completed: false
        }
      ]
    }
  }

  handleChange = (event) => {
    console.log('in change')
    this.setState({ task: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { Todos, task } = this.state
    this.setState({
      Todos: [ { task: task, id: Date.now(), completed: false }, ...Todos ],
      task: ''
    })
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
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <TodoList todoArray={this.state.Todos} task={this.state.task} />
      </div>
    )
  }
}

export default App

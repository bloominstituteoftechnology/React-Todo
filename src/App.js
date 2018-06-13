import React, { Component } from 'react'
import Todo from './components/TodoComponents/Todo'

class App extends Component {
  constructor () {
    super()
    this.state = {
      header: 'The ToDo List',
      newTodo: [
        {
          task: '',
          id: Date.now(),
          completed: false
        }
      ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render () {
    return (
      <div>
        <h2>{this.state.header}</h2>
        <Todo toDoArray={this.state.newTodo} />
        <input />
      </div>
    )
  }
}

export default App

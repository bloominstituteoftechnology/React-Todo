import React, { Component } from 'react'
import Todo from './components/TodoComponents/Todo'

class App extends Component {
  constructor () {
    super()
    this.state = {
      header: 'The ToDo List',
      toDos: [],
      task: '',
      completed: false,
      id: 2
    }
  }

  addToDo = (event) => {
    this.setState({ task: event.target.value })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render () {
    return (
      <div>
        <h2>{this.state.header}</h2>
        <Todo toDoArray={this.state.toDos} />
        <input
          type='text'
          placeholder='Add Todo'
          value={this.state.task}
          onChange={this.addToDo}
        />
      </div>
    )
  }
}

export default App

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import ToDo from './ToDo'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      task: [],
      add: ''
    }
  }
  addTodo = element => {
    const pushTodo = this.state.task
    pushTodo.push(this.state.add)
    this.setState({
      task: pushTodo,
      add: ''
    })
  }

  submitToDo = element => {
    this.setState({ add: element.target.value })
  }
  render() {
    return (
      <div>
        {this.state.task.map((tasks, index) =>
          <task key={index} tasks={tasks} />
        )}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.submitToDo}
            placeholder="Add ToDO Item"
            value={this.state.add}
          />
        </form>
      </div>
    )
  }
}

export default TodoList

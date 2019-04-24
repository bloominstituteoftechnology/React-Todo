'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define initial state
 */

const initialState = [
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
]

/**
 * Define component
 */

class App extends Component {
  constructor() {
    super()
    this.state = { todo: initialState }
  }

  addTask = (event) => {
    event.preventDefault()

    this.setState({todo: [...this.state.todo, {
      task: event.target.elements.task.value,
      id: new Date(),
      completed: false
    }]})

    event.target.elements.task.value = ''
  }

  completedTask() {
    console.log("Completed task")
  }

  clearCompletedTasks() {
    console.log("Clear completed tasks")
  }

  render() {
    return (
      <div className="jsx-App">
        <h2>Todo List: MVP</h2>
        <components.TodoList todo={this.state.todo} onClick={this.completedTask} />
        <components.TodoForm
          addTask={this.addTask}
          clearCompletedTasks={this.clearCompletedTasks} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App

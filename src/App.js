'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/')

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

  render() {
    return (
      <div className="jsx-App">
        <h2>Todo List: MVP</h2>
        <components.TodoList />
      </div>
    )
    // <components.TodoForm />
  }
}

/**
 * Export component
 */

module.exports = App

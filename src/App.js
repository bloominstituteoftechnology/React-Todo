'use strict'

/**
 * Dependencies
 */

const React = require('react')

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

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App

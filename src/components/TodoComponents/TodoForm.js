'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

function TodoForm(props) {
  return (
    <div className="jsx-TodoForm">
      <form onSubmit={props.addTask}>
        <input type="text" name="task" placeholder="...todo"></input>
        <button type="submit">Add Todo</button>
        <button onClick={props.clearCompletedTasks}>Clear Completed</button>
      </form>
    </div>
  )
}

/**
 * Export component
 */

module.exports = TodoForm

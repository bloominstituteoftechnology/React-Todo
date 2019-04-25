'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import styles
 */

require('./Todo.scss')

/**
 * Define component
 */

function Todo(props) {
  let styleClasses = ''

  if (props.data.completed) {
    styleClasses += 'jsx-Todo--completed'
  }

  function updateCompletedState() {
    props.toggleCompleted(props.data.id)
  }

  return (
    <li className={"jsx-Todo " + styleClasses} onClick={updateCompletedState}>
      {props.data.task}
      {props.data.completed}
    </li>
  )
}

/**
 * Export component
 */

module.exports = Todo

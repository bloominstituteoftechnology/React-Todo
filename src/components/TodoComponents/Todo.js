'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import styles
 */

require('./Todo.css')

/**
 * Define component
 */

function Todo(props) {
  return (
    <li className={"jsx-Todo " + (props.data.completed ? 'text-strikethrough' : '')} onClick={props.onClick}>
      {props.data.task}
      {props.data.completed}
    </li>
  )
}

/**
 * Export component
 */

module.exports = Todo

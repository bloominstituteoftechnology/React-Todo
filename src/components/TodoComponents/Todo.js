'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

function Todo(props) {
  return (
    <li className="jsx-Todo" key={props.data.id}>{props.data.task}</li>
  )
}

/**
 * Export component
 */

module.exports = Todo

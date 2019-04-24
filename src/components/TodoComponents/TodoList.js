'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Todo = require('./Todo')

/**
 * Define component
 */

function TodoList(props) {
  return (
    <ul className="jsx-TodoList">
      {props.todo.map(todo => <Todo data={todo} />)}
    </ul>
  )
}

/**
 * Export component
 */

module.exports = TodoList

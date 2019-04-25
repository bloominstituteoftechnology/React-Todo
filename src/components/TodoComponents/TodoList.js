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
  console.log('Todo List', JSON.stringify(props.todo, null, 2))
  return (
    <ul className="jsx-TodoList">
      {props.todo.map(todo => <Todo key={todo.id.toString()} data={todo} toggleCompleted={props.toggleCompleted} />)}
    </ul>
  )
}

/**
 * Export component
 */

module.exports = TodoList

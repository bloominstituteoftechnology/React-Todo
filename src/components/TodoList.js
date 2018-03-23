import React, { Component } from 'react'
import Todo from './Todo'
import { v4 } from 'uuid'

// makeTodo :: String -> Object[Todo]
const makeTodo = text => ({ text, completed: false, id: v4() })

export default class TodosList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [ makeTodo('todo A'), makeTodo('todo B')],
      newTodo: makeTodo('')
    }
  }

  handleChange = (e) => {
    this.setState({ newTodo: makeTodo(e.target.value) })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState, props) => {
      const todo = prevState.newTodo
      return !todo.text
	? undefined
        : {
	  todos: prevState.todos.concat(todo),
	  newTodo: makeTodo('')
	}
    })
  }

  toggleTodo = (e, id) => {
    this.setState((prevState, props) => prevState.todos
      .map(todo =>
	todo.id === id
	  ? Object.assign(todo, { completed: !todo.completed })
	  : todo
      ))
  }

  removeTodo = (e, id) => {
    e.preventDefault()
    this.setState({ todos: this.state.todos.filter((t) => t.id !== id) })
  }

  render() {
    return (
      <div>
	<ul>{this.state.todos.map(todo => (
	  <div key={todo.id} className={todo.completed ? 'complete' : 'incomplete'} >
	    <Todo
	      todoMessage={todo.text}
	      toggleTodo={(e) => this.toggleTodo(e, todo.id)}
	      removeTodo={(e) => this.removeTodo(e, todo.id)}
            />
	  </div>
	))}
	</ul>

	<form onSubmit={this.handleSubmit}>
	  <input onChange={this.handleChange} value={this.state.newTodo.text} />
	</form>
      </div>
    )
  }
}


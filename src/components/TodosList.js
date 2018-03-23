import React, { Component } from 'react'
import Todo from './Todo'
import { v4 } from 'uuid'

// generateTodo :: Function -> String -> Object[Todo]
function generateTodo(idFn) {
  return function(text) {
    return { text, completed: false, id: idFn() }
  }
}

// makeTodo :: String -> Object[Todo]
const makeTodo = generateTodo(v4)

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
    //e.preventDefault()
    this.setState((prevState, props) => prevState.todos
      .map(todo =>
	todo.id === id
	  ? Object.assign(todo, { completed: !todo.completed })
	: todo
      ))
  }

  render() {
    return (
      <div>
	<ul>{this.state.todos.map(todo => (
	  <Todo
	    key={todo.id}
	    todoMessage={todo.text}
	    toggleTodo={(e) => this.toggleTodo(e, todo.id)}
	    complete={todo.complete}
          />))}
	</ul>

	<form onSubmit={this.handleSubmit}>
	  <input onChange={this.handleChange} value={this.state.newTodo.text} />
	</form>
      </div>
    )
  }
}


//	    <Todo key={todo.id} toggleTodo={this.toggleTodo} todoMessage={todo.text} />

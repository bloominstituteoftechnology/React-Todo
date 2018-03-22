import React, { Component } from 'react'
import { v4 } from 'uuid'
//import Todo from './Todo'

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

  toggleTodo = (e) => {
    e.preventDefault()
    console.log(e)
    this.setState((prevState, props) => {
      return prevState.todos.map(({ id }) => {
	console.log(id)
	return id
      })
    })
  }


  render() {
    return (
      <div>
	<ul>
	  {this.state.todos.map(todo => (
            <div key={todo.id}>
              {todo.text}
              <a onClick={this.toggleTodo} href=''>
                &times;
	      </a>
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

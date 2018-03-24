import React, { Component } from 'react'
import Todo from './Todo'
import { v4 } from 'uuid'

// makeTodo :: String -> Object[Todo]
const makeTodo = text => ({ text: text, completed: false, id: v4() })

// Local Storage Side Effects:
const saveTodoToStorage = (todo) => localStorage.setItem(todo.id, JSON.stringify(todo))
const removeTodoFromStorage = (todo) => localStorage.removeItem(todo.id)
const updateToggleInStorage = (newTodo) => {
  localStorage.removeItem(newTodo.id)
  localStorage.setItem(newTodo.id, JSON.stringify(newTodo))
}

export default class TodosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: Object.values(localStorage).map(todo => JSON.parse(todo)),
      newTodo: makeTodo('')
    }
  }

  handleChange = (e) => {
    const todo = e.target.value
    this.setState({ newTodo: makeTodo(todo) })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState, props) => {
      const todo = prevState.newTodo
      saveTodoToStorage(todo)
      return !todo.text
	? undefined
        : {
	  todos: prevState.todos.concat(todo),
	  newTodo: makeTodo('')
	}
    })
  }

  toggleTodo = (e, todo) => {
    this.setState((prevState, props) => prevState.todos
      .map(prevTodo => {
	if(prevTodo.id === todo.id) {
	  const newTodo = Object.assign(prevTodo, { completed: !prevTodo.completed})
	  updateToggleInStorage(newTodo)
	  return newTodo
	} return todo
      }))
  }

  removeTodo = (e, todo) => {
    e.preventDefault()
    removeTodoFromStorage(todo)
    this.setState({ todos: this.state.todos.filter(t => t.id !== todo.id) })
  }

  render() {
    return (
      <div>
	<ul>{this.state.todos.map(todo => (
	  <div key={todo.id} className={todo.completed ? 'complete' : 'incomplete'} >
	    <Todo
	      todoMessage={todo.text}
	      toggleTodo={(e) => this.toggleTodo(e, todo)}
	      removeTodo={(e) => this.removeTodo(e, todo)}
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


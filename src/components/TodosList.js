import React, { Component } from 'react'

const Input = (props) => {
  return (
    <div>
      <input value={this.props.todoText} />
    </div>
  )
}


export default class TodosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['Call Mom', 'Do laundry'],
      newTodo: ''
    }
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let todos = this.state.todos
    todos.push(this.state.newTodo)
    this.setState({ todos, newTodo: '' })
  }

  render() {
    return (
      <div>
	<ul>{this.state.todos.map((todo, i) => <li key={i}> {todo} </li>)}</ul>
	<form onSubmit={this.handleSubmit}>
	  <input onChange={this.handleChange} type="text" value={this.state.newTodo} />
	</form>
      </div>
    )
  }
}

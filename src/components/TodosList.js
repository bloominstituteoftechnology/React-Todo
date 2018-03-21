import React, { Component } from 'react'

export default class TodosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['todo 1', 'todo 2'],
      todo: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log(event)
    let todo = event.target.value
    console.log('todo:', todo)
  }

  render() {
    return (
      <div>
	<ul>{this.state.todos.map((todo, i) => <li key={i}> {todo} </li>)}</ul>
	<form onSubmit={this.handleSubmit}>
	  <input value={this.state.newTodo} />
	</form>
      </div>
    )
  }
}

//       <div>this.state.todos.map(todo => <div>{todo}</div>)</div>


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react'
import Todo from './Todo'

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    }
  }
  render() {
    return (
      <div className="todos">
        {
          this.state.todos.map((todo) => {
            return (
              <Todo key={todo.id} todo={todo} toggleComplete={this.toggleComplete}/>
            )
          })
        }
      </div>
    )
  }
}

export default TodoList

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

export class TodoList extends React.Component {
  render() {
    return (
      <div>
        <p> { this.props.todo.title } </p>
      </div>
    )
  }
}

export default TodoList

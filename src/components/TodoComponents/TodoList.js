import React from 'react'
import './Todo.css'
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map(todo => {
          return <Todo task={todo.task} completed={todo.completed} />
        })}
        <Todo task="finish mvp" completed="false"/>
      </div>
    )
  }
}

export default TodoList;
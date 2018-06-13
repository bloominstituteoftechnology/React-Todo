import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class Todo extends React.Component{
  constructor(){
    super()
  }

  render(){
      return (
        <div>
          <TodoList />
          <TodoForm />
        </div>
    )
  }
}

export default Todo;
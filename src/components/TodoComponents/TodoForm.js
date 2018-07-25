import React from 'react';
import './Todo.css';

const TodoForm = props => {
  console.log('TodoFormProps equal ', props)
  return (
    <div>
      <input placeholder="...todo" onChange={this.handleInputChange} />
      <button onClick={this.handleUpdateState}>Add Todo</button>
      <button onClick={this.handleUpdateState}>Clear Completed</button>
    </div>
  )
}

export default TodoForm;
import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <input 
          type='text'
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button>Add Item</button>
        <button onClick={props.clearComplete}>Clear Completed</button>
      </form>
    </div>
  )
}


export default TodoForm
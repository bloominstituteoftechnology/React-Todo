// <TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.


import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.addNewTodo}>
      <input 
        type="text"
        name="newTodo"
        onChange={props.changeHandler} 
        placeholder="New Todo" 
        value={props.newTodo}  
      />

      <button type="submit" onClick={props.addNewTodo}>
      Add Todo
      </button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;
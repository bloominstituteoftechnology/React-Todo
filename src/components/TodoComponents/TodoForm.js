import React from 'react'

const TodoForm = (props) => {
  return (
    <form className="todoFormContainer">
      <input
        type="text"
        name="todoForm"
        value={props.value}
        placeholder="...todo"
        onChange={props.handleInputChange}
      />    
      <button type="submit" onClick={props.addTodo} >Add Todo</button>
      <button onClick={props.removeComplete} >Clear Completed</button>
    </form>
  )
}

export default TodoForm;
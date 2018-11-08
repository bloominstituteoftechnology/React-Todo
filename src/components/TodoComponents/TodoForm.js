import React from 'react'

const TodoForm = props => {
  return (
    <div className="todoFormContainer">
      <form onSubmit={props.addTodo}>
        <input 
          type="text"
          name="inputText"
          placeholder="...todo"
          value={props.inputText}
          onChange={props.handleChange}
          />
        <button name="addIt" type="submit">Add Todo</button>
        <button name="clearIt" onClick={props.removeCompleted} >Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
import React from 'react'

const TodoForm = props => {
  return (
    <div className="todoFormContainer">
      {/* {console.log(props.inputText, "Inside FORM")} */}
      <form onSubmit={props.addTodo}>
      {/* {console.log(props)} */}
        <input 
          type="text"
          name="inputText"
          placeholder="...todo"
          value={props.inputText}
          onChange={props.handleChange}
          />
        <button name="addIt" type="submit">Add Todo</button>
        <button name="clearIt" type="submit">Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
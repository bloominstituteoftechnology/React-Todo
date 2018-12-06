import React from 'react';
import './Todo.css';


const TodoForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.add} >
        <input onChange={props.todo} type="text" value={props.value} placeholder="...todo" required></input>
        <input type="submit" value="Add ToDo"></input>
        <input type="button" onClick={props.clear} value="Clear Completed"></input>
        <input type="button" onClick={props.clearAll} value="Clear All"></input>
      </form>
    </div>
  )
}

export default TodoForm;
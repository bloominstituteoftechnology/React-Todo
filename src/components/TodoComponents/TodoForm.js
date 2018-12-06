import React from 'react';
import './Todo.css';


const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.add} >
        <input onChange={props.todo} type="text" value={props.value} placeholder="...todo"></input>
        <input type="submit" value="Add ToDo"></input>
        <button onClick={props.clear}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
import React from 'react';
import './Todo.css'

const TodoForm = (props) => {
  return (
    <form>
      <input id="taskInput" placeholder="...todo item" onChange={props.itemAdd} value={props.value}/>
      <button onClick={props.add}>Add ToDo</button>
      <button onClick={props.clear}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;

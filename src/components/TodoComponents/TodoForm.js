import React from 'react';


const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.add} >
        <input onChange={props.todo} type="text" value={props.value} placeholder="...todo"></input>
        <input type="submit" value="Add ToDo"></input>
        <button>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
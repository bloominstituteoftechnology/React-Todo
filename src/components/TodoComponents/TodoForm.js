import React from 'react';

export default function TodoForm(props) {
  const {newToDo, addTodo, clearCompleted, changeHandler, enterHandler} = props;
  return(
    <div className="user-input">
      <input className="user-input input" value={newToDo} onChange={changeHandler} onKeyPress={enterHandler} type="text"></input>
      <button className="user-input add" onClick={addTodo} >Add Todo</button>
      <button className="user-input clear" onClick={clearCompleted} >Clear Completed</button>
    </div>
  )
}
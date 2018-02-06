import React from 'react';

function Todo(props) {
  return (
    <div className="todo-entrybox">
      <form onSubmit={props.addToList}>
        <input type="text" onChange={props.handleNewItemInput} placeholder="Add a todo item." value={props.state.newItem} />
      </form>
    </div>
  )
}

export default Todo;

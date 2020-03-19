import React from 'react'

const Todo = (props) => {
  const { todo } = props;
  console.log('todo', todo);
  return (
    <div className="todo">
      {todo.map(list => {
        return (
          <p id={list.id} complete={props.complete} onClick={e => props.handleComplete(e)}>{list.input}</p>
        )
      })}
    </div>
  )
}

export default Todo

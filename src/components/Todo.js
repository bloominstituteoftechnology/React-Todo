import React from 'react'

const Todo = (props) => {
  const { todo } = props;
  console.log('todo', todo);
  return (
    <div className="todo">
      {todo.map(list => { return <p>{list}</p> })}
    </div>
  )
}

export default Todo

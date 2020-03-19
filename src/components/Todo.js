import React from 'react'

const Todo = (props) => {
  const { todo } = props;
  console.log('todo', todo);
  return (
    <div className="todo">
      {/* {todo.map(list => {
        return (
          <div onClick={e => props.handleComplete(e)}>
            <p >{list}</p>
          </div>
        )
      })} */}
    </div>
  )
}

export default Todo

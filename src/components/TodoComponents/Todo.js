import React from 'react'

const Todo = props => {
  return (
    <div>
      {/* {console.log(props)} */}
      <p>{props.todoListItem}</p>
    </div>
  )
}

export default Todo;
import React from 'react'

const Todo = props => {
  const { task } = props.todo
  return (
    <div className='card card-body mb-3'>
      <ul className='list-group'>
        <li className='list-group-item'>Get 'er done: {task}</li>
      </ul>
    </div>
  )
}

export default Todo

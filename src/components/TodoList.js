import React from 'react'

import Todo from './Todo'

const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.todoList.map(item => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.task}
          completed={item.completed}
          toggleItem={props.toggleItem}
        />
      ))}
    </div>
  )
}

export default TodoList

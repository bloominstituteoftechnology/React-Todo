import React from 'react';
import './Todo.css';
const ToDoList = (props) => {
  return (
    <div>
      {
        props.list.map(item => {
          return <p key={item.id} className={item.completed}>{item.task}</p>
        })
      }
    </div>
  )
}

export default ToDoList;
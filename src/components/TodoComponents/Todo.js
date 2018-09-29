import React from 'react'
import "./Todo.css"

const Todo = props => {
  return props.list.map((item, id) => (
    <li
      onClick={() => props.toggleComplete(item.id)}
      key={id}
      id={id}
      style={{
        textDecoration: item.completed ? 'line-through' : 'none'
      }}
    >
      {item.task}
    </li>
  ));
};

export default Todo;
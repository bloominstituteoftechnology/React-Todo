import React from 'react';
import './Todo.css'

const Todo = (props) => {

  return (
    <li>
      {props.value}
       <input type = 'checkbox' value  = 'completed'/>
    </li>

  )

};

export default Todo;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const ToDoList = (props) => { 
  return (
    <div className = 'ToDoList'>
      {props.todos.map((todo) => {
        return (
          <ToDo todo={todo} />
        )
      })
      
        
    }

    </div>
  )
}

export default ToDoList;
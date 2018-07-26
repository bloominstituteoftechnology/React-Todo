// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
  return (
    <div>
      {(props.todoList.map(item => {
        return <p onClick={props.toggleComplete} className={item.completed ? 'complete' : 'incomplete'} id={item.id} key={item.id}>{item.item}</p>
      }))}
    </div>
  )
};

export default TodoList;

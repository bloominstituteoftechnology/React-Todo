import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.data.map((e) => (
        <Todo 
          key={e.task}
          propsItem={e}
          changeComplete={props.changeComplete}
        />
      ))}
    </div>
  )
}


export default TodoList



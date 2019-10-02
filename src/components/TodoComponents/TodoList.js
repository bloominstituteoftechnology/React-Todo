import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List: </h1>
      {props.todoArray.map((todoObj) => (
          <Todo
            todo={todoObj}
            markCompleted={props.markCompleted}
            key={todoObj.id}
          />
      ))}
    </div>
  )
}

export default TodoList;
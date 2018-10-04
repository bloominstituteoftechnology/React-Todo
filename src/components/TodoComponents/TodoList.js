import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

  return (
    <div>
      <h1>Todo List: MVP</h1>

      {props.todoArray.map(todoObj => {
        return (
          <div><Todo todo={todoObj}/></div>
          );
        })}
    </div>
  )
}

export default TodoList;
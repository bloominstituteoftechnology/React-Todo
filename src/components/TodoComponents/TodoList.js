import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

  console.log(props)
  return (
    <div>
    {props.todoArray.map(todoObj => {
      return (
        <div>
          <Todo todo={todoObj}/>
        </div>
        );
    })}
    </div>
  )
}

export default TodoList;


import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
    {props.todoList.map(todo => {
      return <Todo task={todo.task} />
    })}
    </div>
  )
}




export default TodoList;
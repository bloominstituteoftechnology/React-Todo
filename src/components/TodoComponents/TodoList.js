//<TodoList />` receives your Todos array and iterates over the list generating a new ` < Todo />` for each element in the array.

import React from 'react';


const TodoList = props => {
  return(
    <div>
      {props.todos.map(todo => {
        return <p key={todo.id}>{todo.task}</p>;
      })}
    </div>
  )
}

export default TodoList;
//<TodoList />` receives your Todos array and iterates over the list generating a new ` < Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <div>

      {props.todos.map(todo => {
        return (
          <Todo 
            key={todo.id}
            changeCompleted={props.handleCompleted}
            todo={todo}
            
          
          />
        );
      })}
    </div>
  )
}

export default TodoList;
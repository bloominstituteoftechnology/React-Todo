
import React from 'react';
import Todo from './Todo';
 const TodoList = props => {
    return (
      <div>
        {props.todoItems.map(todoItem => (
          <Todo
            key={todoItem.id}
            listItem={todoItem}
            markComplete={props.markComplete}
          />
        ))}
      </div>
    );
  };
  
  export default TodoList;
   
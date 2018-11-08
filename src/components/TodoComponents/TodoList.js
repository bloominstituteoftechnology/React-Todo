// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
 const TodoList = props => {
    return (
      <div>
        {props.todoItems.map(todoItem => (
          <Todo
            key={todoItem.listItem}
            listItem={todoItem}
          />
        ))}
      </div>
    );
  };
  
  export default TodoList;
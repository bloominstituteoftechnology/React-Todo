// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';



function TodoList(props) {
   return (
    <ul>
      {props.list.map(listItem => 
        {return (
          <Todo
          key={listItem.id} 
          todoItem={listItem} 
          toggleItem={props.toggleItem} 
        />)}
      )}
    </ul>
   );
 };

export default TodoList;
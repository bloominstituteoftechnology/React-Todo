// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
          {props.todoList.map((todo, index) => {
            if (!todo.task.toLowerCase().includes(props.searchText.toLowerCase())) {
              return;
            }
            return <Todo onClick={() => props.clickToggle(index)} key={todo.id} todo={todo}/>
          })}
          
        </div>
    );
}

export default TodoList;
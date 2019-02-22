// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './components/TodoComponents/Todo';

const TodoList = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false   
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false   
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false   
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];

function TodoList() {
    return (
      <div>
        <h1>Todo List</h1>
  
        <div className="todo-list">
          {items.map(item => (
            <Todo item={item} />
          ))}
        </div>
      </div>
    );
  }
  

export default TodoList;
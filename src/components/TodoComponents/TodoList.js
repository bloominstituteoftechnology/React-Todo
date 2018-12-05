// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';
import Todo from './Todo';

const list = [
    {
        task: 'study code',
        key: Date.now(),
        id: 1,
        completed: false
      },
      {
        task: 'Bake Cookies',
        key: Date.now(),
        id: 2,
        completed: false
      },
      {
          task: 'play smash bros',
          key: Date.now(),
          id: 3,
          completed: false
      }
];

const TodoList = props => {
    return 
        <h1>{props.todo.map(todo => (<Todo todoListProp={todo} />))}</h1>
}

export default TodoList;
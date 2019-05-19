// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <React.Fragment>
        {props.todoItems.map(todoItem => {
   return  <Todo key ={todoItem.id} todoInfo= {todoItem}
   toggle = {props.toggle}
   />
        })}
   </React.Fragment>
    );
};

export default TodoList; 
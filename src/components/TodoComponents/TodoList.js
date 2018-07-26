// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';

const TodoList = props => {
  return (
    <div>
      {props.listItem.map((item, index) => {
        let orderNumber = index + 1;
        return <div
        className={item.completed ? props.crossedText : props.regularText} 
        onClick={()=>props.toggleId(item.id)}
        key={item.id}>Task {orderNumber}: {item.task}</div>;
      })}
    </div>
  );
};


export default TodoList;
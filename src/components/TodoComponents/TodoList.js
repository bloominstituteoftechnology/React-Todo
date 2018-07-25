import React from 'react';
import Todo  from  './Todo';
import './Todo.css';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return (
<div>
  {props.list.map(item => <Todo task={item.task} />)}  
</div>
    );
};


export default TodoList;

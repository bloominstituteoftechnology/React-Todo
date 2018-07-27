import React from 'react';
import Todo  from  './Todo';
// import './components/TodoComponents/Todo.css'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return (
<div>
  {props.list.map(item => <Todo handleToggleComplete={props.handleToggleComplete}
  key={item.id} 
  id={item.id}
  task={item.task} 
  completed={item.completed}
  />
  )} 
</div>
    );
};


export default TodoList;

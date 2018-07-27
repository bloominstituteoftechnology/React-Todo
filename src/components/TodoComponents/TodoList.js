// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css'
import Todo from './Todo.js';


const TodoList = (props) => {
  let list = props.array.map(item => <Todo taskItem={item.task} taskChange={props.taskChange} completion={item.completed} />)
  return (
    <div>
      {list}
    </div>
  )
}

export default TodoList;

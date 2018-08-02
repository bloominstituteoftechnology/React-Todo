import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
      <div>
         {props.taskList.map((each, i) => {
             return (
             <Todo handleToggleComplete={props.hanndleToggleComplete} key={i}  task={each.task} />
             );
         })}
      </div>
  );
};

export default TodoList;
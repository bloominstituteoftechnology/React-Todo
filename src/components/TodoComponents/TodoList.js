import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
      <div>
         {props.taskList.map((each, i) => {
             return (
             <Todo handleToggleComplete={props.handleToggleComplete} key={i}  todo={each} />
             );
         })}
      </div>
  );
};

export default TodoList;
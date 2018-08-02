import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
      <div>
         {props.taskList.map((each, i) => {
             return <Todo key={i}  task={each.task} />
         })}
      </div>
  );
};

export default TodoList;
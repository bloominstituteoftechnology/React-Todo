import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
      <div>
         {props.todoListArr.map((each, i) => {
             return <div>{<Todo key={i}  task={each.task} />}</div>
         })}
      </div>
  );
}

export default TodoList;
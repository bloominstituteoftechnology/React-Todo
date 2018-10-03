import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <div>
      {props.todoData.map(todo => <Todo key={todo.id} task={todo.task}/>)}
    </div>
  );
}

export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  return (
    <div>
      {props.todoList.map( x => <TodoItem key={x.id} data={x} />)}
    </div>
  );
};

export default TodoList;

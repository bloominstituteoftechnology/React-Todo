import React from 'react';
import TodoItem from './TodoItem';

const TodoList = TodoListProps => {
  return (
    <div>
      {TodoListProps.todoList0.map( x => <TodoItem key={x.id} data={x} />)}
    </div>
  );
};

export default TodoList;

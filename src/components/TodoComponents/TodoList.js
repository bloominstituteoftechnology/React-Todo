import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
  return (
    <div>
      {props.todo.map(todo => <Todo tasks={todo.task} />)}
      <TodoForm />
    </div>
  );
};

export default TodoList;

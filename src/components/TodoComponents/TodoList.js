import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
  return (
    <div>
      {props.todo.map(todo => <Todo tasks={todo.task} />)}
      <TodoForm
        clicked={props.clicked}
        task={props.task} />
    </div>
  );
};

export default TodoList;

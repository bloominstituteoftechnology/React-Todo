import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css';

const TodoList = (props) => {

    return (
      <div>
          <Todo />
          <TodoForm />
      </div>
    )
  }

  export default TodoList;
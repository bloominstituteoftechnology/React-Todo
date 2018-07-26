import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = props => {
  return (
    <div>
      <TodoList todoList={props.todoList} toggleComplete={props.toggleComplete} />
      <TodoForm annihilate={props.annihilate} submit={props.submit} onchange={props.onchange} clearComplete={props.clearComplete} />
    </div>
  )
}

export default Todo;

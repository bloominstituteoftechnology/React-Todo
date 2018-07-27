import React from 'react';
import './Todo.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = props => {
  return (
    <div className='todo'>
      <TodoList todoList={props.todoList} toggleComplete={props.toggleComplete} />
      <TodoForm submitSearch={props.submitSearch} onchangeSearch={props.onchangeSearch} annihilate={props.annihilate} submit={props.submit} onchange={props.onchange} clearComplete={props.clearComplete} />
    </div>
  )
}

export default Todo;

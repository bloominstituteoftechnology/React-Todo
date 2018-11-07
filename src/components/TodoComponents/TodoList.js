// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = props => {
  return (
    <div className="todoContainer">
      <h1>Todo List: MVP</h1>
        <Todo />
        <TodoForm />
    </div>
  )
}

export default TodoList;

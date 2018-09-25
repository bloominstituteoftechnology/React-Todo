// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import ToDoForm from './TodoForm';


const ToDoList = (props) => {
  return (
    <section className='todolist-container'>
      <section className='todolist'>
        {props.list.map(todo => {
          return (
            <Todo key={todo.id} id={todo.id} task={todo.task}>
            </Todo>
          );
        })}
      </section>
      <ToDoForm onClick={props.submit} />
    </section>
  );
}

export default ToDoList;

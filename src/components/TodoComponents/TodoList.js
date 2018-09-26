// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import ToDoForm from './TodoForm';


const ToDoList = (props) => {
  return (
    <section className='todolist-container'>
      <section className='todolist'>
        <h1 className='todolist-header'>Todo Items</h1>
        {props.list.map(todo => {
          return (
            <Todo key={todo.id} id={todo.id} task={todo.task} onClick={props.toggleCompleted} completed={todo.completed}>
            </Todo>
          );
        })}
      </section>
      <ToDoForm submit={props.submit} remove={props.removeCompleted} search={props.searchForMatches} />
    </section>
  );
}

export default ToDoList;

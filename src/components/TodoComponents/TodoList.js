import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo, toggleCompleted, clearCompleted }) => {
   return (
      <div className='shopping-list'>
         {todo.map(task => (
            <Todo
               key={task.id}
               task={task}
               toggleCompleted={toggleCompleted}
            />   
         ))}
         <button className='clear-btn' onClick={clearCompleted}>
            Clear Completed
         </button>
      </div>
   )
}

export default TodoList;


import React from 'react';
import Todo from './Todo';

const TodoList = props => {
   return(
       <div className='todo-list'>
           <ul>{props.todos.map(task => (
               <Todo key={task.id} task={task} toggleTask= {props.toggleTask} />
           ))}
           </ul>
           <button className='clear-finished' onClick={props.clearCompleted}>Clear Finished</button>
       </div>
   ); 
}

export default TodoList;
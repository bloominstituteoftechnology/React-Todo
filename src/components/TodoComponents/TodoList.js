import React from 'react';
import Todo from './Todo';

function TodoList (props){
return (
    <div className='todo-list'>
    {props.todos.map(taskitems => {
        return (
       <Todo todoitem={taskitems} />
       
        );
    })}
    </div>
);
}

export default TodoList;

import React from 'react';
import './Todo.css';
const Todo = (props) => {
    console.log(props.item)
    return (
        
        <div className='todo-item'>
            {props.item.toDoItem} {/* we are accessing the individualt item that we mapped over. Now Todo has access to each individual to do item */}
        </div>
      
    );
};

export default Todo; 
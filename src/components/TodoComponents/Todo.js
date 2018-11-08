import React from 'react';
import './Todo.css';





const Todo = (props) => {
    console.log(props.item)
    return (
        
        <div className='todo-item'>
            {props.item.toDoItem} {/* STEP 5. ACCESS EACH ITEM --we are accessing the individualt item that we mapped over. Now Todo has access to each individual to do item */}
        </div>                                          /* NOW TIME TO CREATE THE FORM (GO BACK TO APP.JS) */
      
    );
};

export default Todo; 
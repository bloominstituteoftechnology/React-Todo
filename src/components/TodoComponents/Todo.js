import React from 'react';
import './Todo.css';





const Todo = (props) => {
    console.log(props.item)
    return (
        
        <h2 
        style={props.item.completed ? {textDecoration: 'line-through' } : null }
        onClick= {() => props.changeComplete(props.item.id)} className={`todo-item ${props.item.completed}`}>
               
                {props.item.toDoItem}
                                                     {/* STEP 5. ACCESS EACH ITEM --we are accessing the individualt item that we mapped over. Now Todo has access to each individual to do item */}
        </h2>                                          /* NOW TIME TO CREATE THE FORM (GO BACK TO APP.JS) */
      
    );
};

export default Todo; 
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className="list-wrapper">
        {props.listTasks.map(listed => {
         return (
            <Todo 
            toggleCompleted={props.toggleCompleted}
            key= {Math.random()} 
            singleTodo={listed} 
            />
        )
        })}
    </div>
    );
};

export default TodoList;





  

  

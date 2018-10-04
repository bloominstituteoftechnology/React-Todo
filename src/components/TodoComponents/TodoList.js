// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

const TodoList = props => {
    return (
        <div className = 'todolist'>
            
            {props.todoData.map((item, index) => {
                
                return <p className ={item.decorate} value ={item.completed} onClick={() => props.completeTaskSelect(index)} key={item.id}>{item.task}</p>;
            })}
        </div>
    );
}

export default TodoList;
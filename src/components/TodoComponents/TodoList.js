// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';


const TodoList = props => {
    return (
        <div className="list-container">
            {props.todos.map(todo => {
               return (
                    <div 
                    className={todo.completed ? "complete" : "incomplete"}
                    key={todo.uid} 
                    uid={todo.uid}
                    onClick={props.completeTask}
                    task={todo.task}
                    completed={todo.completed}
                    >{todo.task}</div>
               )
            })}
        </div>
    );
}

export default TodoList;
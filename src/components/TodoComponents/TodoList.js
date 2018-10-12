// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = props => {
    return(
        <div className="todo-list-container">
        <div className="title">
            <h1 className="title-header">Task Review:</h1>
            <p className="title-txt">{props.inputText}</p>
        </div>
        
        {props.todoList.map((todo, index) => <Todo key={todo.id.toString()} completedTask = {props.completedTask} todoList={todo} index={index} />)}
        </div>    
    );
}

export default TodoList;
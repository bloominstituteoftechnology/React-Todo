// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import "./Todo.css";

const TodoList = props => {
    return(
        <div className="todoList">
            {props.todos.map(item=>(
                <Todo key={item.id} item={item} handleToggle={props.handleToggle}/>
            ))}
            <button onClick={props.handleDone} className="clear-btn">Click to Clear</button>
        </div>
    );
};

export default TodoList;
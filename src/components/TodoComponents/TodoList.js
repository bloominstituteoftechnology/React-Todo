// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js :)
import React from 'react';
import TodoForm from './TodoForm';
import './Todo.css';
import Todo from './Todo';


const TodoList = () => {
    return(
        <div className="ListContainer">
            <Todo />
        </div>
    );
}

export default TodoList;
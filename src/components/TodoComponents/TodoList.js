// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = () => {
    return (
        <div className="className">
            <TodoForm formStyle="input-style" placeholder="....todo"/>
        </div>
    );
};

export default TodoList;
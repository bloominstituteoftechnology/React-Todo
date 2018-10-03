import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm.js'

const TodoList = () => {
    return (
        <div className="display">
            <h1>Just Do It! <span>the list.</span></h1>
            
            <hr/>

            <div className="actions">
                <TodoForm />
            </div>
        </div>
    )
}

export default TodoList;
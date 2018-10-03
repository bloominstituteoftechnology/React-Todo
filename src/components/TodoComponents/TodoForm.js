import React from 'react';
import './Todo.css';

const TodoForm = props => { 
    return (
        <div className = 'todoform'>
            <form>
                <input type="text" placeholder="...todo"></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;
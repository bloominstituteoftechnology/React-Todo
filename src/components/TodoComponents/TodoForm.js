import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>
            <input onChange={(event) => {
                { props.inputHandler(event.target.value) }
            }
        }
                type="text" placeholder="...todo" />
            <button onClick={() => props.addTask()}>Add Todo</button>
            <button onClick={() => props.clearCompleted()}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;


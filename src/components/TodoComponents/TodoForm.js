import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input 
                type="text"
                onChange={props.onChange}
                placeholder="...todo"
                value={props.input}
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm
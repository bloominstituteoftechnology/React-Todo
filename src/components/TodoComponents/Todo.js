import React from 'react';

const Todo = props => {
    return (
        <div className="todo-card">
            <h3>{props.toDos.task}</h3>
            {console.log("Hello")};
        </div>
    );
}

export default Todo;
import React from 'react';

const Todo = ({todo, remove}) => {
    return (
        <p className="todos">
        {todo.value}
        <span 
        className="removeButton" 
        onClick={()=> {
            remove(todo.id)
        }}>
        x
        </span>
        </p>
    );
};

export default Todo;
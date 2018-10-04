import React from 'react';

const Todo = ({todo}) => {
    return (
        <div  style={todo.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => todo.handleToggleComplete(todo.id)}
      >
        
            {todo.task}
        </div>
    );
}

export default Todo;
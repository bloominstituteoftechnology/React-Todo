import React from 'react';
import './Todo.css';

const Todo = ({ item, select }) => {
    const validation = item.completed ? { textDecoration: 'line-through' } : { fontWeight: 'bold' }
    return (
        <p onClick={() => select(item.id)} style={validation} key={item.id}>
            {item.task}
            {item.completed}

        </p>
    );
}

export default Todo;
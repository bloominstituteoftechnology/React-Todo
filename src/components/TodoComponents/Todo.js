import React from 'react';
import './Todo.css';

const Todo = ({item}) =>{
    return (
        <p key={item.id}>
            {item.task}
            {item.completed}

        </p>
    );
}

export default Todo;
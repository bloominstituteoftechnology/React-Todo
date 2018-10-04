import React from 'react';
import Todo from './Todo';

const TodoList = ({todo}) => (
    <div>
        {todo.map(item => {
            return <Todo 
                item={item} 
                className={item.completed ? 'completed' : 'incomplete'} 
            />
        })}
    </div>
);

export default TodoList;
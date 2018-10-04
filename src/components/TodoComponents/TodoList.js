import React from 'react';
import Todo from './Todo';

const TodoList = ({todo, toggleTodo}) => (
    <div>
        <h1>Todo List: MVP</h1>
        {todo.map(item => {
            return <Todo 
                toggleTodo={toggleTodo} 
                item={item} 
                className={item.completed ? 'completed' : 'incomplete'} 
            />
        })}
    </div>
);

export default TodoList;
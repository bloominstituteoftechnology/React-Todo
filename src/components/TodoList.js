import React from 'react';
import styles from './styles.css';

const TodoList = props => {
    return (
        <div>
            <h2>Todo App</h2>
                {props.todos.map((todo, index) => (
                    <div 
                    onClick={() => {console.log(todo)}}
                    key={todo + index}>{todo}</div>
                ))}
        </div>
    );
};

export default TodoList;

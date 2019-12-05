import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={props.toggleComplete}
                    />
            ))}
            <button 
                className="clear-btn"
                onClick={props.clearCompleted}>
                Clear Completed
            </button> 
        </div>
    )
}

export default TodoList;
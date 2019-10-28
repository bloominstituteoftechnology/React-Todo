import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.things.map(todo => (
                <Todo
                    key={todo.id}
                    item={todo}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Tasks
        </button>
        </div>
    );
};

export default TodoList;
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.things.map(Todo => (
                <Item
                    key={Todo.id}
                    item={Todo}
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
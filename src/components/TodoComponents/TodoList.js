import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {props.list.map(element => 
                <Todo
                    completed={element.completed}
                    key={element.id}
                    item={element.task}
                />
            )}
        </div>
    );
}

export default TodoList;

import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {props.list.map(element => 
                <Todo 
                    key={element.id}
                    item={element.task}
                    completed={element.completed}
                    onClick={props.done}
                />
            )}
        </div>
    );
}

export default TodoList;

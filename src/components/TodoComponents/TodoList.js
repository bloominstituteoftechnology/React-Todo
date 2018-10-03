import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(newItem => (
                <Todo
                    key={newItem.id}
                    newItem={newItem}
                />
            ))}

        </div>
    )
}

export default TodoList;
    

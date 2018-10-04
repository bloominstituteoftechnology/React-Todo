import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(newItem => (
                <Todo
                  toggleComplete=                    {props.toggleComplete}
                    key={newItem.id}
                     newItem={newItem}
                />
            ))}

        </div>
    )
}

export default TodoList;
    

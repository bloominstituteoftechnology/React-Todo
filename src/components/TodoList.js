import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(todo => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
        </div>
    )
}

export default TodoList;
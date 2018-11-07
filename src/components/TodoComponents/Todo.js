import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    return (
    <div>
        {props.list.map(listsInMap => (
            <TodoList key = {listsInMap.task}
             todoListProps = {listsInMap} />
        ))}
    </div>
    );
};

export default Todo;
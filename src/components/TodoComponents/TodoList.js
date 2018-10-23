import React from 'react';
import Todo from './Todo'

function TodoList(props) {
    // iterate over the list of tasks passed down from state -> props.
    return (
        <div>
        {props.tasks.map(item => {
            // TODO - Todo item should have a completed flag that is also set.
            return <Todo item={item} />
        })}
        </div>
    );
}

export default TodoList;
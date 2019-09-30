import React from 'react';
import Item from './Todo';

const TodoList= props=>{
    return (
        <div>
            {props.tasks.map(item => (
            <Item key={item.id} item={item} toggle={props.toggle} />
            ))}
            <button onClick={props.clearCompleted}>
            Clear Completed Tasks
            </button>
        </div>
        );
}
export default TodoList

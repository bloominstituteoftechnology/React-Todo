import React from 'react';
import Todo from './Todo'

function TodoList(props) {
    // iterate over the list of tasks passed down from state -> props.
    return (
        <div>
        {props.tasks.map((item, index) => {
            // TODO - Todo item should have a completed flag that is also set.
            return <Todo key={index} item={item} idx={index} markTodoComplete={props.markTodoComplete}/>
        })}
        </div>
    );
}

export default TodoList;
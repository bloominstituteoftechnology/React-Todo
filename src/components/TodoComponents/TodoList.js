import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="list">
            <h1>To Do:</h1>
            {props.todoArray.map(x => <Todo completedToggle={props.completedToggle} task={x.task} key={x.id} id={x.id} />)}
        </div>
    );
}

export default TodoList;
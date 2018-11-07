import React, {Fragment} from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="list">
            <h1>To Do:</h1>
            {props.todoArray.map(x => <Todo task={x.task} />)}
        </div>
    );
}

export default TodoList;
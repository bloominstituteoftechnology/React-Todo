import React from 'react';

function Todo(props) {
    return(
        <div className="todo-item">
            <p>
                {props.listTodo.id} {props.listTodo.task}
            </p>
        </div>
    );
};

export default Todo;
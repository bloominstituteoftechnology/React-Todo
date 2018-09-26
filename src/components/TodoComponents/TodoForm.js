import React from 'react';

const TodoForm  =   (props) =>  {
    return(
        <div classType="todoForm">
            <input placeholder="...todo" />
            <div>Add Todo</div>
            <div>Clear Completed</div>
        </div>
    )
}

export default TodoForm;

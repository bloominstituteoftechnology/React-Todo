import React from 'react';
import './Todo.css';

const TodoForm = (props) => {

    return (
        <div>
            <input type='text' onChange={props.changeTodoHandler}
                value={props.value}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        props.addTodoHandler();
                    }
                }} />
            <button onClick={props.addTodoHandler}>Add Todo</button>
            <button onClick = {props.clearHandler}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;


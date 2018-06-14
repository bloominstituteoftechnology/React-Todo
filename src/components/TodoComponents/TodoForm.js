import React from 'react';
import './Todo.css';

const TodoForm = (props) => {

    return (
        <div className = "todo-form">
            <input type="text" onChange={props.changeTodoHandler}
                value={props.value}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        props.addTodoHandler();
                    }
                }} />
            <button className = 'todo-form__btn' onClick={props.addTodoHandler}>Add Todo</button>
            <button className = 'todo-form__btn' onClick = {props.clearCompletedHandler}>Clear Completed</button>
            <button className = 'todo-form__btn' onClick={props.clearAllHandler}>Clear Everything</button>
        </div>
    );
}

export default TodoForm;


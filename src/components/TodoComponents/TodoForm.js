import React from 'react';

const TodoForm = (props) => {
    return (
        <form className="input-form" onSubmit={(e) => props.onSubmitHandler(e)}>
            <input type="text" placeholder="..add new todo" value={props.value} onChange={(e) => {props.onChangeHandler(e) }} />
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
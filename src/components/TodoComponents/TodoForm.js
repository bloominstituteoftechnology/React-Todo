import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={(x) => props.onSubmitHandler(x)}>
            <input type="text" placeholder="..add new todo" value={props.value} onChange={(x) => {props.onChangeHandler(x) }} />
            <button type="submit">Add Todo</button>
            <button onClick={(x) => props.onClickRemove(x)}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
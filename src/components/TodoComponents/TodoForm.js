import React from 'react';

const TodoForm = (props) => {
    return (
        <form className="input-form" onSubmit={(e) => props.onSubmitHandler(e)}>
            <input type="text" placeholder="..add new todo" value={props.value} onChange={(e) => {props.onChangeHandler(e) }} />
            <button className="button add" type="submit">Add Todo</button>
            <button className="button remove" onClick={(e) => props.onClickRemove(e)}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
import React from 'react';

function ToDoForm() {
    return (

        <form onSubmit={props.submitHandler}>
            <input
                type="text"
                value={props.value}
                onChange={props.changeHandler}
                placeholder="task"
                name="task"
            />
            <button type="submit">Todo</button>
        </form>
    );
}

export default TodoForm;

import React from 'react';

function TodoForm(props) {
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
            <button>Clear All</button>
        </form>
    );
}

export default TodoForm;

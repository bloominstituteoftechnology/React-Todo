import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input onChange={props.handleInput} />
        </form>
    );
}

export default TodoForm;
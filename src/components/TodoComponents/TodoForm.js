import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input vonChange={props.handleInput} />
        </form>
    );
}

export default TodoForm;
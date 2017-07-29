import React from 'react';

const TodoInput = (props) => {
    // console.log(props);
    return (
        <div>
            <input value={props.todo} onChange={props.onTodoInput} />
            <button onClick={props.onTodoSubmit}>Add Todo</button>
        </div>
    );
};

export default TodoInput;
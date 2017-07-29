import React from 'react';

const TodoInput = (props) => {
    // console.log(props);
    return (
        <div>
            <input className='input-1' value={props.todo} onChange={props.onTodoInput} />
            <button onClick={props.onTodoSubmit}>Submit</button>
        </div>
    );
};

export default TodoInput;

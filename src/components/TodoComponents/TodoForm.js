import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input name="task" value={props.value} onChange={props.onChange} placeholder="TASK" type="text" />
            <button type="submit">SUBMIT</button>
            <button onSubmit={props.clearTodo}>CLEAR COMPLETED</button>
        </form>
    );
}
export default TodoForm;
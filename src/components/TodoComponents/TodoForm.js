import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input name="task" value={props.value} onChange={props.onChange} placeholder="TASK" type="text" />
            <button>SUBMIT</button>
        </form>
    );
}
export default TodoForm;
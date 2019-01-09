import React from 'react';

function TodoForm(props) {
    console.log('todo form test');
    return (
        <form>
            <input
                value={props}
                type="text"
                onChange={props.handleChanges}
            />
        </form>
    )
}
export default TodoForm;
import React from 'react';

const TodoForm = (props) => {
    return (
    <form>
        <input value={props.start}></input>
<button>Submit</button>
</form>)
    }

    export default TodoForm;

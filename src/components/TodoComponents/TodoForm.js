import React from 'react';

const TodoForm = (props) => {
    return (
    <form>
        <input value={props.value} onChange={props.inputHandler}></input>
        <button type="submit" onClick={props.submitHandler}>Submit</button>
</form>)
    }

    export default TodoForm;

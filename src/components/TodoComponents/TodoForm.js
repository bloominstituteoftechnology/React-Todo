import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input value={props.toDoInput} onChange={props.handleInput}/>
            <button onClick={props.addToDo}>Add Todo</button>
        </form>
    );
}

export default TodoForm;
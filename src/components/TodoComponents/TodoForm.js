import React from 'react';

const TodoForm = (props) => {
    return (
        <form className="formContainer" onSubmit={props.addTodo}>
            <input className="todoInput"onChange={props.changeInput} value={props.vOS}></input>
            <div className="button addTodo" onClick={props.addTodo}>Add Todo</div>
            <div className="button clearCompleted" onClick={props.clearCompleted}>Clear Completed</div>
        </form>
    );
}

export default TodoForm;
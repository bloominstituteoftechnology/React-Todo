import React from 'react';

const TodoForm = props => {
    return (
        <form className = "todo-form">
            <input value ={props.value} type="text" onChange={props.changeInput} placeholder= "...todo"></input>
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
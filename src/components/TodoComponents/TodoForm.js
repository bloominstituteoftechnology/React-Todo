import React from 'react';

const TodoForm = props => {
    return (
        <div>
            {props.todoData.map(item => {
                return <h1>{item.task}</h1>;
            })}
        <form onSubmit={props.addNewTodo}>
        <input type='text' name="newTodo" onChange={props.changeHandler} value={props.newTodo}/>
        <button type='submit' onClick={props.addNewTodo}>Add Todo</button>
        <button>Clear Completed</button>
        </form>
        </div>
    )
}

export default TodoForm;
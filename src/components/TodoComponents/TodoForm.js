import React from 'react';
import Todo from './Todo'

//Input field
//Add Todo button
//Clear Completed button

const TodoForm = props => {
    return (
        <div>
            <Todo todoData={props.todoData}/>
            <form onSubmit={props.addNewTodo}>
            <input 
            type="text"
            name="todoInput"
            placeholder="...todo"
            onChange={props.changeHandler}
            value={props.newTask}
            />
            <button type="submit" onClick={props.addNewTodo}>
            Add Todo
            </button>
            </form>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;
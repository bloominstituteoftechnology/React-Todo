import React from 'react';
import Todo from './Todo'

//Input field
//Add Todo button
//Clear Completed button

const TodoForm = props => {
    return (
        <div>
            <Todo
            todoData={props.todoData}
            strikeThrough={props.strikeThrough}
            />
            <form onSubmit={props.addNewTodo}>

            <input 
            type="text"
            name="newTask"
            placeholder="...todo"
            onChange={props.changeHandler}
            value={props.newTask}
            />

            <button type="submit" onClick={props.addNewTodo}>
            Add Todo
            </button>

            </form>

            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;
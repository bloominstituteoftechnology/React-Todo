import React from 'react';
import Todo from './Todo'

import './Todo.css'

//Input field
//Add Todo button
//Clear Completed button

const TodoForm = props => {
    return (
        <div>
            <form 
            className="form"
            onSubmit={props.addNewTodo}>

            <input 
            className="input"
            type="text"
            name="newTask"
            placeholder="enter task"
            onChange={props.changeHandler}
            value={props.newTask}
            />

            <button type="submit" onClick={props.addNewTodo}>
            Add Task
            </button>

            <button onClick={props.clearCompleted}>
            Clear Completed
            </button>

            </form>

            <Todo
            todoData={props.todoData}
            strikeThrough={props.strikeThrough}
            />
        </div>
    )
}

export default TodoForm;
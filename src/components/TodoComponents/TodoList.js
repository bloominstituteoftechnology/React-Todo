import React from 'react';
import Todo from './Todo'

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> 
// for each element in the array.

const TodoList = props => {
    return (
        <div>
            {props.todoTasks.map(todo => {
                return <Todo 
                        todoTask = {todo["task"]}
                        todoId = {todo["id"]}
                        key = {todo["id"]}
                        />
            })}
        </div>
    )
}


export default TodoList;
import React from 'react';
import Todo from './Todo'

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> 
// for each element in the array.

const TodoList = props => {
    return (
        <div>
            {props.todoEntries.map(todoEntry => {
                return <Todo
                            todoEntryTask = {todoEntry.task}
                            todoEntryId = {todoEntry.id}
                            todoEntryCompleted = {todoEntry.completed}
                            key = {todoEntry.id}
                            todoCompletedToggle = {props.todoCompletedToggle}
                        />
            })}
        </div>
    )
}


export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const ToDoList = ({ taskList, handleTodoDbClick }) => {
    // debugger
    return (
         taskList.map(todo => {
                return (
                    <todo
                        todo={todo}
                        handleTodoDbClick={handleTodoDbClick}
                    />
                )
            })
        
    )
}
export default ToDoList
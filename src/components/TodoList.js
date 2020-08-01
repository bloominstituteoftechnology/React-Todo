// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const ToDoList = ({ taskList, handleTodoDbClick }) => {
    return (
         taskList.map((todo, index) => {
                return (
                    <Todo
                        todo={todo}
                        handleTodoDbClick={handleTodoDbClick}
                        index={index}
                    />
                )
            })
        
    )
}
export default ToDoList
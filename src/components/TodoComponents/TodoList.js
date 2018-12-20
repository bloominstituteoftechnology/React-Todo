// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="todo-list"> {props.todoObjects.map(todoItem => { 
                return <Todo 
                taskName={todoItem.task} 
                taskId={todoItem.id} 
                markCompleted={props.markCompleted}
                /> 
            })} 
        </div>
    )
}
export default TodoList;
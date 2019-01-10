// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js'



const TodoList = props =>{
    
    return(
        <div>
        {props.toDoListData.map((activity) =>{
           return <Todo taskCompleted={props.taskCompleted} activity={activity}/>
        })}
        
        </div>
    )
}

export default TodoList
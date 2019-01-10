// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js'



const TodoList = props =>{
    
    return(
        <div>
        {props.toDoListData.map((activity, i) =>{
           return <Todo taskCompleted={props.taskCompleted} activity={activity} id={i}/>
        })}
        
        </div>
    )
}

export default TodoList
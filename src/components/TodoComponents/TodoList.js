// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js'
import TodoForm from './TodoForm'


const TodoList = props =>{
    return(
        <div>
        {props.toDoListData.map((activity, i) =>{
            console.log(activity);
           return <Todo activity={activity} id={i}/>
        })}
        <TodoForm />
        </div>
    )
}

export default TodoList
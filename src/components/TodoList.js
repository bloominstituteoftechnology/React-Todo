// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList =props=>{


    return(    
        <div>
            <TodoForm  handleClear={props.handleClear} handleAdd={props.handleAdd}/>
            {props.taskList.map(todo =>{
                return<Todo key={todo.id} todo={todo} handleToggle={props.handleToggle} />
            })}
        </div>
    )
}

export default TodoList
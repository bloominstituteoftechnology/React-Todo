import React from 'react'
import Todo from './Todo'

const TodoList = props =>{
    return(
        <div>
            <h3> still todo: </h3>
            <ul>
                {props.tasks.map(item=>(
            <li>
                <Todo key={item.id} item={item}/>
            </li>
            ))}
            </ul>
            <button>
                Clear Completed 
            </button>
        </div>
    )
}



export default TodoList
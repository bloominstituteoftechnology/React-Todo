import React from 'react'
import Todo from './Todo'

const TodoList = props =>{
    return(
        <div>
            <h3> still todo: </h3>
            <ul>
            <li>{props.tasks.map(item=>(
                <Todo key={item.id} item={item}/>
            ))}
            </li>
            </ul>
            <button>
                Clear Completed 
            </button>
        </div>
    )
}



export default TodoList
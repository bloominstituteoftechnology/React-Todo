import React from 'react'
import Todo from './Todo'

const TodoList = props =>{

    const handleClear = () =>{
        props.handleItemClear();
    }


    return(
        <div>
            <h3> still todo: </h3>
            <ul>
                {props.tasks.map(item=>(
            <li>
                <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item}/>
            </li>
            ))}
            </ul>
            <button onClick={handleClear}>
                Clear Completed 
            </button>
        </div>
    )
}


export default TodoList
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import { Todo } from './Todo';


export const TodoList=((props)=>{
    // console.log(props)
return(<div>
    <ul>
{props.todoItems.map((todo)=>

    {console.log(`task ${todo.completed}`) 
    return(<li className={`task ${todo.completed ? 'completed' :''}`} key={todo.id} onClick={()=>props.toggleTask(todo.id)}><Todo  todo={todo.task}/></li>)
})
}
    </ul>
</div>)
})
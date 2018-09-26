// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = (props)  =>  {
    return(
        <div>
            {props.todo.map(td  =>  {
                return <Todo classStyle={td.completed} clickComplete={()    =>  props.clickComplete(td)} key={td.id} item={td}/>
            })}
        </div>
    )
}

export default TodoList;

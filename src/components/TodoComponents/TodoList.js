// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    console.log(props, "clicked!")
    return (
       <div> <ul>
       {props.todo.map(todo =>( 
            <Todo key={todo.id} 
            todo={todo} 
            toggleTask={props.handleToggleTask}
        />
        ))}</ul>
       </div>
    )
}

export default TodoList;
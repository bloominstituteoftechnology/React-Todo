// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


function TodoList(props){
    return (
        
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    markComplete={props.markComplete}
                    />
                    
                ))} 
        </div>
        
    )
}

export default TodoList;
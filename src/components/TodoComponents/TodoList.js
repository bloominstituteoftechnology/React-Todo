// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoData.map( (item, index) => {
                return <Todo 
                task={item} 
                key={item.id}  
                taskIndex={index}
                selectedTask={props.selectedTask}
                taskCompleted={props.completed}/>
            })}
        </div>
    );
} 

export default TodoList;
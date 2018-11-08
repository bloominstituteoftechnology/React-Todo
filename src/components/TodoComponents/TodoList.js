import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.taskList.map( task => (
                <Todo 
                    key={task.id} 
                    todo={task}
                    toggleComplete={props.toggleComplete} 
                />) 
            )}
        </div>
    )
} 

export default TodoList;
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div>
            {props.todoData.map(item => {
                return <Todo 
                task={item.task} 
                id={item.id} 
                completed={item.completed} 
                toggleCompleted={props.toggleCompleted} 
                todoData={props.todoData}
                 />
            })}
        </div>
    )
}




export default TodoList;




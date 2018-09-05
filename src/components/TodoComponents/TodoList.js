import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
    return (
        <div>
        
           {props.todos.map(todo => {
            return (
            <Todo 
                key={todo.id} 
                todo={todo} 
                toggleCompleted={props.toggleCompleted}/>);
            })}
        </div>
    );
};

export default TodoList;
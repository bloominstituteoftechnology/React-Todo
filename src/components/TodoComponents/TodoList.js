import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className="todo-list">
        {props.todos.map(item => {
            return <Todo
                toggleCompleted={props.toggleCompleted}
                key={item.key}
                // id={item.id}
                task={item}
                />
        })}
        </div>
    );
}
                            
export default TodoList;



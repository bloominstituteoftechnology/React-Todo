import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    return(
        <div className="todolist">
            {props.todos.map(item => (
                <Todo
                key= {item.id}
                item= {item}
                toggleTodos={props.toggleTodos}
                />
            ))}
        
        </div>
    )
}

export default TodoList;
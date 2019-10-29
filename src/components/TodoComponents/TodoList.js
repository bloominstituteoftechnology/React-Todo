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
            <button type= 'submit' onClick ={props.deleteCompleted}>Delete Completed</button>
        
        </div>
    )
}

export default TodoList;
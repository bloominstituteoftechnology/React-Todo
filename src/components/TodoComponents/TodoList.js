import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props.todoData)
    return (
        <div>
            {props.todoData.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTask={props.toggleTask} />
            ))}   

            <button onClick={props.clearCompleted}>
                Clear Complete Tasks 
            </button>
        </div>
    )
}


export default TodoList

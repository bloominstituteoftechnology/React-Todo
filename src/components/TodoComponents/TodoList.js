import React from 'react'
import Todo from './Todo'
import './Todo.css'
const TodoList = props => {
    return (
        <div>
            {props.passedTodos.map(todo => {
                return <Todo 
                key={todo.id}
                singleTodo={todo.task} 
                completedTask={props.complete}
                passedKey ={todo.id}
                classNameProp={todo.completed ? "completed-class": null}
                />;
            })}
        </div>);
}

export default TodoList;

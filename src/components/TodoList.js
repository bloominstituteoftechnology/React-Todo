import React from 'react';
import Todo from './Todo';

function TodoList (props) {
    console.log("TodoList props", props)
    return (
        <div>
        {props.todos.map(todo => 
            <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
            )} 
        </div>
    )
}
export default TodoList


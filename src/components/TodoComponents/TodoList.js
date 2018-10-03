// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import Form from './TodoForm';

let TodoList = props => {
    return (

        <div>
            <h1>Todo List: MVP</h1>
            <ul>
                {props.todos.map(todo => <Todo todo={todo} completeTask={props.completeTask} />)}
            </ul>
            <Form changeHandler={props.changeHandler} addTodo={props.addTodo} clearTodos={props.clearTodos}/>
        </div>
    )
} 

export default TodoList;
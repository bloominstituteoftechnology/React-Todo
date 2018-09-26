import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Pull all of the components together to form the todo app.
const Todo = (props) => {
    console.log("todo", props);

    // props.todoArray: Pass the state array to TodoList.
    return (
        <div>
            <div>Todo.js</div>
            <TodoForm />
            <TodoList todoArray={props.todoArray} />
        </div>
    );
}

export default Todo;

import React from 'react';
import Todo from './Todo';

const TodoForm = (props) => {
    return (
        <div>
            <h1>ToDo Form</h1>
            <ul>
                {props.todoList.map(todoItem => <Todo key = { todoItem.id } item = { todoItem } />)}
            </ul>
            <form>
                <input 
                    value = { props.inputText } 
                    onChange = { props.onChangeInput } 
                />
                <button onClick = { props.onAddTodo }>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;

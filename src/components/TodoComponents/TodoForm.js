import React from 'react';
import styled from 'styled-components';


//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//      -Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//      -Once a todo is submitted, the Todo List should re-render and show the added todo.
    
const TodoFormContainerStyles = styled.div`
    border:1px solid blue;
`

const TodoForm = props => {
    return (
        <TodoFormContainerStyles>
        <div>
            <h2> Todo Form </h2>
            <form onSubmit = {props.addTodoEntry}>
            <input 
                type = "text"
                placeholder = "Add Todo"
                onChange = {props.addTodoHandler}
                value = {props.todoEntry.task}
                />
            </form>
            <button onClick = {props.addTodoEntry}> Add Todo Task </button>
            <button onClick ={() => props.removeCompletedTodos()}> Clear Completed </button>
        </div>
        </TodoFormContainerStyles>
    );
}

export default TodoForm;


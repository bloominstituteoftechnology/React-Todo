import React from "react";
import styled from "styled-components"

const TodoForm = props => {
        return(
            <div className="todoForm">
                <FormContainer>
                <form>
                    <input
                    onChange={props.handleTodoChange}
                    type = "text"
                    name = "todo"
                    value={props.value}
                    placeholder="...new todo"
                    />
                    <button 
                    onClick={props.handleAddTodo}>
                        Add Todo
                        </button>
                    <button 
                    onClick={props.handleClearTodos}>
                Clear Completed
            </button>   
                </form>
                </FormContainer>
                </div>
       )
    }
export const FormContainer = styled.div`
.todoForm{
    width: 33%;
    background: lightgray;
    display: flex;
    flex-direction: column;
    margin: 1%;
    text-align: center;
    border: 1px solid dodgerblue;
}
`;
export default TodoForm
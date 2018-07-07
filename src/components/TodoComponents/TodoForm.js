import React from 'react';
import styled from 'styled-components';


//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//      -Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//      -Once a todo is submitted, the Todo List should re-render and show the added todo.

// color palletes used: http://www.paletton.com/#uid=15a0u0kt+lZlOstrKqzzSiaJidt


const TodoFormContainer = styled.div`
    border: 1px solid red;
    border:none;
    background-color:#560031;
    width:100%;
    height:150px;
    display: flex;
    margin: 0px;
    padding: 0 0px 0 20px;
    align-items:center;
`


const TodoFormForm = styled.form`
    width:100%;
    border:1px solid rgb(112, 26, 75);
    border:none;
`

const InputTextArea = styled.textarea`
    width:100%;
    height:75px;
    min-height:40px;
    font-size:32px;
    color: #C684A9;
    border: none;
    background:#560031;
    outline:none;
    display:flex;
    resize:none;
    padding-top:17.5px
    padding-bottom:17.5px
    padding-left:10px;
    
`

// const InputTextContainer = styled.input`
//     width:99%;
//     height:auto;
//     min-height:50px;
//     font-size:32px;
//     color: black;
//     border: 1px solid black;
//     background:transparent;
//     outline:none;
//     display:flex;
//     resize:none;
//     margin-left:5px;
//     margin-right:5px;
// `

const ButtonsContainer = styled.div`
    border: 2px dashed lightgreen;
    border:none;
    display:flex;
    flex-direction: column;
    width:30%;
`
const AddTodoButton = styled.div`
    
    font-size:32px;
    font-weight:bold;
    color:#B63A80;
    height:110px;
    width:100%;
    text-align:center;
    padding-top:39px;
    padding-bottom:39px;
    background: repeating-linear-gradient(
        45deg,
        #740042,
        #740042 3px,
        #560031 3px,
        #560031 6px
      );
    border:1px solid #202020;
    :hover {
        border:3px solid #FF0090;
        color:#FF0090;
    }
`

const ClearCompletedButton = styled.div`
    font-size:20px;
    font-weight:bold;
    letter-spacing:1.25px;
    color:#B63A80;
    height:37.5px;
    width:100%;
    text-align:center;
    padding-top:5.5px;
    padding-bottom:5.5px;
    background: repeating-linear-gradient(
        45deg,
        #352E32,
        #352E32 3px,
        #272124 3px,
        #272124 6px
      );
    background: repeating-linear-gradient(
        45deg,
        #740042,
        #740042 3px,
        #560031 3px,
        #560031 6px
    );
    border:1px solid #202020;
    border-top:none;
    :hover {
        border:3px solid #FF0090;
        color:#FF0090;
    }
`

const TodoForm = props => {
    return (
        <TodoFormContainer>
            <TodoFormForm onSubmit = {props.addTodoEntry}>
                <InputTextArea
                    placeholder = "Add Todo ..."
                    onChange = {props.addTodoHandler}
                    value = {props.todoEntry.task}
                    onSubmit = {props.addTodoEntry}
                >
                </InputTextArea>
                {/* <InputTextContainer
                    type = "text"
                    placeholder = "Add Todo"
                    onChange = {props.addTodoHandler}
                    value = {props.todoEntry.task}
                >
                </InputTextContainer> */}
            </TodoFormForm>
            <ButtonsContainer>
                <AddTodoButton onClick = {props.addTodoEntry}> Add Todo </AddTodoButton>
                <ClearCompletedButton onClick ={() => props.removeCompletedTodos()}> Clear Completed </ClearCompletedButton>
            </ButtonsContainer>
        </TodoFormContainer>
    );
}

export default TodoForm;


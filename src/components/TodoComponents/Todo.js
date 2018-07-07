 import React from 'react'; 
 import '../TodoComponents/Todo.css'
 import styled from 'styled-components';

 // <Todo /> is a component that takes in the todo data and displays the task to the screen.

 const TodoContainer = styled.div`
    margin:0px 5px 15px 0px;
    border-radius:10px;
    padding:10px 0 10px 10px;
    background-color:none;
    
    font-size:32px;
    font-weight: medium;
    width:100%; 
    border: 4px solid #7A0547; 
    border:none
    
 `
 const UnorderedItem = styled.ul`
     
    color:#727272;
    color:#7e7c7c;
    
    :hover {
        color:#a5a4a4;
    }
 `


const Todo = props => {
    return (
        <TodoContainer>
            <div className = {`todoEntryCompleted${props.todoEntryCompleted}`}>
                <UnorderedItem onClick = {() => props.todoCompletedToggle(props.todoEntryId)}>
                    &#183; {props.todoEntryTask}
                </UnorderedItem>
            </div>
        </TodoContainer>
    );
};


 export default Todo;
import React from 'react';
import Todo from './Todo'
import styled from 'styled-components';

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> 
// for each element in the array.

const TodoListContainer = styled.div`
    border:1px solid green;
    border:none;
    align-self:flex-start;
    width:100%;
    margin:15px 0 0 0;
    padding-left:10px;
`

const TodoList = props => {
    return (
        <TodoListContainer>
            {props.todoEntries.map(todoEntry => {
                return (
                    <Todo
                        todoEntryTask = {todoEntry.task}
                        todoEntryId = {todoEntry.id}
                        todoEntryCompleted = {todoEntry.completed}
                        key = {todoEntry.id}
                        todoCompletedToggle = {props.todoCompletedToggle}
                    />
                );
            })}
        </TodoListContainer>
    )
}


export default TodoList;
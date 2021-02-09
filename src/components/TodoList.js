// your components will all go in this `component` directory.
import React from 'react';
import styled from 'styled-components';
import ToDoForm from './TodoForm';
import ToDoItem from './Todo';

export default function ToDoList (props) {
    return (
        <StyledToDoContainer>
            <h1>Your To Do List:</h1>
            {
                props.list.map(item => (
                    <ToDoItem key={item.id} item={item} toggleOff={props.toggleOff} />
                ))
            }
            <ToDoForm addNew={props.addNew} list={props.list} handleChanges={props.handleChanges} inputValue={props.inputValue} />
        </StyledToDoContainer>
    );
};

const StyledToDoContainer = styled.div`
    border: solid 1px red;
`;
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;
`

const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    font-size: 20px;
    box-sizing: border-box;
`

const Button = styled.button`
    font-size: 20px;
    padding: 5px 20px;
    background: transparent;
    cursor: pointer;
`

const TodoForm = props => {
    return (
        <StyledForm>
            Add Items:
            <form onSubmit={props.addListItem}>
                <StyledInput type="text" name="inputText" 
                placeholder="add new list item" value={props.inputText}
                onChange={props.handleChange} />
                <Button type="submit">Add Item</Button>
                <Button onClick={props.clearCompleted}>Clear Completed Items</Button>
            </form>
        </StyledForm>
    );
}

export default TodoForm;
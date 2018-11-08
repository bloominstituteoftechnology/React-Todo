import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 500px;
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

const SearchForm = props => {
    return (
        <StyledForm>
            Search the List:
            <form onSubmit={props.searchItems}>
                <StyledInput type="text" name="searchText" 
                placeholder="enter search criteria" value={props.searchText}
                onChange={props.handleChange} />
                <Button type="submit">Search</Button>
                <Button onClick={props.clearSearch}>Clear Search</Button>
            </form>
        </StyledForm>
    );
}

export default SearchForm;
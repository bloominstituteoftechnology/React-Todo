import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border: black 3px solid;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    width: auto;

    input {
        width: 75%;
    }

    .inputbox{
        margin-top: 1rem;
    }
    button {
        margin-left: 1rem;
    }

`

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem:''
        };
    };

    handleChanges = event => {
        this.setState({
            newItem: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newItem: ''});
    };

    handleClear = event => {
        event.preventDefault();
        event.stopPropagation(); // needed?
        this.props.clearItems();
    }

    render(){
        return(
            <StyledForm onSubmit={this.handleSubmit}>
                <div>
                <input onChange={this.handleChanges} value={this.state.newItem} placeholder='What do you want to do?'/>
                </div>
                <div className='inputbox'>
                    <button>Add</button>
                    <button onClick={this.handleClear}>Clear</button>
                </div>
                
                
                
                
            </StyledForm>
        )
    }
};
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
background-color: #7FFFD4;
color: white;
width: 200px
border:none;
`


class ToDOForm extends React.Component{
    constructor(){
        super()
        this.state={
            item: ''
        }
    }
    handleChanges = e => {
        this.setState({
            item: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.item);
        this.setState({
            item: ''
        })
    }
    render(){
        return ( 
            
            <form onSubmit={this.handleSubmit}>
            <Input 
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.handleChanges}/>
            </form>
        
        )
    }
}
export default ToDOForm;
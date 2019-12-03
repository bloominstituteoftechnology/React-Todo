import React, { Component } from 'react'
import styled from 'styled-components';

const TodoInput = styled.input`
    /* width: 100%;
    font-size: 14px;
    padding: 6px 8px;
    border-width: 1px;
    border-style: solid; */
`;

const SubmitButton = styled.button`
/* background: #DE7E44;
border-radius: 25px;
height: 50px;
width: 130px;
margin-top: 2%;
outline: 0;
border: 2px solid white;
color: white;
font-size: 1.03rem;
margin-left: 31%; */
`;


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    taskSubmit = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.taskSubmit}>
                <TodoInput 
                    type='text'
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChanges}
                    placeholder='Enter New Task'
                />
                <span>
                    <SubmitButton>Submit New Task</SubmitButton>
                </span>
            </form>
        )
    }
}
export default TodoForm;
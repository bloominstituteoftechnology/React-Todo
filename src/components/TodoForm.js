import React from "react";
import styled from "styled-components";
import {TextField, Button, Card} from "@material-ui/core";

const StyledCard = styled(Card)`
    display: flex;
    flex-flow: column;
    align-items: center;
    align-content: space-around;
    padding: 10px;
    width: 60%;
    margin: 0 20% 20px 20%;
`;

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: "",
        }
    }
    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoName);
        this.setState({
            todoName: "",
        });
    }

    formSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <StyledCard onSubmit={this.formSubmit}>
                <styles>
                <TextField type="text" name="todoName" value={this.state.todoName} onChange={this.handleChanges} label="...todo" variant="outlined" color="primary"></TextField>
                </styles>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add todo</Button>
            </StyledCard>
        )
    }
}
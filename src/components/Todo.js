import React, { Component } from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    border: lightgrey 1px solid;
    background-color: lightgrey;
    border-radius: 10px;
    margin: 1rem;
`

export default class Todo extends Component {

    buttonClick = () => {
        this.props.toggleItem(this.props.item.id);
    };

    render() {
        return (
            <StyledItem onClick={this.buttonClick} className={this.props.item.completed ? 'completed':''}>
                <p>{this.props.item.task}</p>
            </StyledItem>
        )
    };
};
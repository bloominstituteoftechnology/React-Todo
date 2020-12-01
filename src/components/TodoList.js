import React, { Component } from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StyledList = styled.div`
.completed {
    border: grey 1px solid;
    background-color: grey;
    color: lightgrey;
    font-style: italic;
}
`

export default class TodoList extends Component {
    render () {
        return (
            <StyledList className='todoList'>
                {this.props.list.map(item => {
                    return <Todo toggleItem={this.props.toggleItem} key={item.id} item={item} />
                })}
            </StyledList>
        )
    };
};
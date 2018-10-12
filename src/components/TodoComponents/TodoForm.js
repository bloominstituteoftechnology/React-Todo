import React, {PureComponent} from 'react';
import styled from 'styled-components'
import {FlexColumn, FlexRow} from "../Elements/Flex";
import Input from '../Elements/Input';
import Button from '../Elements/Button';

const Form = styled.form`
    
`;

const TodoForm = props => {

    this.handleAdd = e => {
        props.handleAdd(e);
        document.querySelector('input').value = "";
    };

    return (
        <Form onSubmit={e => this.handleAdd(e)}>
            <FlexRow alignCenter>
                <Input placeholder="Enter task name" />
                <Button primary type="submit">ADD</Button>
                <Button onClick={() => props.handleClear()}>CLEAR COMPLETED</Button>
            </FlexRow>
        </Form>
    );
};

export default TodoForm;

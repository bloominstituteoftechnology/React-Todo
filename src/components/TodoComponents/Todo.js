import React from 'react';
import {FlexColumn} from "../Elements/Flex";
import styled from 'styled-components';

const Item = styled.div`
    padding: 15px 0;
    border-bottom: thin solid #dedcdc;
    width: 455px;
`;

const Todo = props => {
    return (
        <Item style={props.style} onClick={() => props.onClick()}>
            {props.children}
        </Item>
    );
};

export default Todo;

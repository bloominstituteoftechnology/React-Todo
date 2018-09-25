import React from 'react';
import {FlexColumn} from "../Elements/Flex";


const Todo = props => {
    return (
        <div style={props.style} onClick={() => props.onClick()}>
            {props.children}
        </div>
    );
};

export default Todo;

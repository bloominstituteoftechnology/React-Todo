import React, {PureComponent} from 'react';
import {FlexColumn, FlexRow} from "../Elements/Flex";


const TodoForm = props => {

    this.handleAdd = e => {
        props.handleAdd(e);
        document.querySelector('input').value = "";
    };

    return (
        <form onSubmit={e => this.handleAdd(e)}>
            <FlexRow>
                <input />
                <button type="submit">ADD</button>
                <button onClick={() => props.handleClear()}>CLEAR COMPLETED</button>
            </FlexRow>
        </form>
    );
};

export default TodoForm;

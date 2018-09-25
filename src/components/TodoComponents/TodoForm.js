import React, {PureComponent} from 'react';
import {FlexColumn, FlexRow} from "../Elements/Flex";


const TodoForm = props => {
    return (
        <form onSubmit={e => props.handleAdd(e)}>
            <FlexRow>
                <input />
                <button type="submit">ADD</button>
                <button onClick={() => props.handleCompleted()}>CLEAR COMPLETED</button>
            </FlexRow>
        </form>
    );
};

export default TodoForm;

import React from 'react';
import {FlexColumn} from "../Elements/Flex";
import Todo from './Todo'

const TodoList = props => {
    const {list} = props;
    console.log("list", list);

    return (
        <FlexColumn>
            {list.map(todo => {
                return (
                    <Todo>{todo.task}</Todo>
                )
            })}
        </FlexColumn>
    );
};

export default TodoList;

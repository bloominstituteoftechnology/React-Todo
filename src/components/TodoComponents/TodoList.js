import React from 'react';
import {FlexColumn} from "../Elements/Flex";
import Todo from './Todo'

const TodoList = props => {
    const {list} = props;

    return (
        <FlexColumn>
            {list.map(todo => {
                return (
                    <Todo key={todo.id} style={{cursor: "pointer",  textDecoration: todo.completed ? "line-through" : "none"}} onClick={() => props.handleCompleted(todo.id)}>{todo.task}</Todo>
                )
            })}
        </FlexColumn>
    );
};

export default TodoList;

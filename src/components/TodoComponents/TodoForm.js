import React from 'react';
import styled from 'styled-components';
import { Button } from '@smooth-ui/core-sc';

const StyledForm = styled.form``;

const TodoForm = props => {
    return (
        <>
            <form onSubmit={props.addTask}>
                <input
                    type="text"
                    name="taskInput"
                    placeholder="Add new task"
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <Button type="submit" variant="success" width="100%">
                    Add Todo
                </Button>
                <Button type="button" variant="danger" width="100%" onClick={props.clearTasks}>
                    Clear Completed
                </Button>
            </form>
        </>
    );
};

export default TodoForm;

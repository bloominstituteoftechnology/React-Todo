import React from 'react'
import styled from 'styled-components'
import { Button } from '@smooth-ui/core-sc'

const StyledForm = styled.form``

const TodoForm = props => {
    return (
        <>
            <form
                onSubmit={event =>
                    props.addTask(
                        event,
                        props.tasks,
                        props.setTasks,
                        props.setTaskInput
                    )
                }>
                <input
                    type="text"
                    name="taskInput"
                    placeholder="Add new task"
                    value={props.inputText}
                    onChange={event =>
                        props.handleInput(event, props.setTaskInput)
                    }
                />
                <Button type="submit" variant="success" width="100%">
                    Add Todo
                </Button>
                <Button
                    type="button"
                    variant="danger"
                    width="100%"
                    onClick={event =>
                        props.clearCompleted(event, props.tasks, props.setTasks)
                    }>
                    Clear Completed
                </Button>
            </form>
        </>
    )
}

export default TodoForm

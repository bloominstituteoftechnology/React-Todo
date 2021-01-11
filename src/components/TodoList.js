import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`

const Button = styled.button`
    background: #e7e7e7;
    padding: 0 1rem;
    transition: .25s ease-in-out;

    &:hover {
        cursor: pointer;
        background: white;
    }
`

const TodoList = props => {

    console.log(props.todos)
    return (
        <Wrapper>
            {props.todos.map((item) => {
                if (item.completed === false) {
                    return (
                        <div>
                            <Todo handleToggle={props.handleToggle} key={item.id} props={item} />
                        </div>
                    )
                } else {
                    console.log('completed!')
                }
            })}
            <Button onClick={props.handleCompleted}>Complete All</Button>
        </Wrapper>
    )
}

export default TodoList


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

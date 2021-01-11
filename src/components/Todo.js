import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #e7e7e7;
    min-width: 10rem;
    border-radius: .375rem;
    padding: .2rem 0;
    margin-bottom: 1rem;
    
    &:hover {
        cursor: pointer;
    }
`

const Name = styled.p`
    color: black;
    text-align: center;
`

const Todo = props => {
    const handleClick = () => {
        props.handleToggle(props.props.id)
    }

    console.log(props.props)
    return (
        <Wrapper onClick={handleClick}>
            <Name>{props.props.item}</Name>
        </Wrapper>
    )
}

export default Todo
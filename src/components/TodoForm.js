import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
`

const Input = styled.input`

`

const Button = styled.button``

class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleTodoAdd(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <Wrapper>
                <form>
                    <Input value={this.state.inputValue} onChange={this.handleChange} type='text' name='todo' />
                </form>
                <Button onClick={this.handleSubmit}>Add</Button>
            </Wrapper>
        )
    }
}

export default TodoForm


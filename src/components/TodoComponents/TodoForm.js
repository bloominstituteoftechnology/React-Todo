import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    addNewTodo = event => {
        event.preventDefault()
        this.props.addItem(this.state.item)
    }

    clearFinished = event => {
        event.preventDefault()
        this.props.clearCompItems()
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    value={this.item}
                    name='item'
                    onChange={this.handleChanges}
                />
                <button onClick={this.addNewTodo}>Add Todo</button>
                <button onClick={this.clearFinished}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
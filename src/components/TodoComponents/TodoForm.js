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
        this.item = ''
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
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
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
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
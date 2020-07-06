import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        this.setState({ task: e.target.value })
    }

    submitTodo = e => {
        e.preventDefault();
        this.setState({ task: '' })
        this.props.addTodo(e, this.state.task)
    }

    render() {
        console.log('rendering the form')
        return(
            <form onSubmit={this.submitTodo}>
                <input
                    type='text'
                    value={this.state.task}
                    name='todo'
                    onChange={this.handleChanges}
                />
                <button>Add to List</button>
            </form>
        )
    }
}
export default TodoForm;
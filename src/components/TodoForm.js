import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItemName: ''
        }
    }
    handleChanges = e => {
        this.setState({
            newItemName: e.target.value
        })
    }

    handleSumbit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItemName)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.todoListName} type="text" name='item' onChange={this.handleChanges}></input>
                <button onClick={this.props.submitListItem}>Add</button>
            </form>
        )
    }
}

export default TodoForm;
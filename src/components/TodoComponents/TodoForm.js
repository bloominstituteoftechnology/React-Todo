import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.item);
    };

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type='text'
                    placeholder='Create New Task'
                    value={this.item}
                    name='item'
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;
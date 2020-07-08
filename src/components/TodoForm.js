import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            id: '',
            completed: false
        };
    };

    handleChanges = e => {
        console.log('from TForm HC', e.target.value);
        this.setState({ task: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChanges} />
                <button>Add Task</button>
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;
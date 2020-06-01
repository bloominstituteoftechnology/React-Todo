import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ newTask: "" });
        this.props.addTask(this.state.newTask)
        // this.props.addTask(this.state.newTask);
        // this.setState({
        //     newTask: ""
        // })
    };

    render() {
        return (
            <div className='todo-form'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='newTask'
                        value={this.state.newTask}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
                <button className='clear' onClick={this.props.clearCompleted}>
                    Clear Item
                </button>
            </div>
        );
    }
}

export default TodoForm
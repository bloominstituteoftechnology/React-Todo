import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ task: "" });
        this.props.addTask(this.state.task)
        // this.props.addTask(this.state.task);
        // this.setState({
        //     task: ""
        // })
    };

    render() {
        return (
            <div className='todo-form'>
                <form onSubmit={this.handleSubmit}>
                    <button>Add</button>
                    <input
                        type='text'
                        name='task'
                        value={this.state.task}
                        onChange={this.handleChanges}
                    />
                    
                </form>
                <button className='clear' onClick={this.props.clearCompleted}>
                    Clear Item
                </button>
            </div>
        );
    }
}

export default TodoForm
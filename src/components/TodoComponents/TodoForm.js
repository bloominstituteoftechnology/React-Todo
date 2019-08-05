import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: '' }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.task} name="task" onChange={this.handleChange}></input>
                <button>Add</button>
            </form>
            <button onClick={this.props.clearCompleted}>Clear completed</button>
            </>
        )
    }
}

export default TodoForm;
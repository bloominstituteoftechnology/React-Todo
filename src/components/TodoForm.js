import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleSubmit = e => {
        if (e.which === 13 && e.target.value !== '') {
            e.preventDefault();
            this.props.addTask(this.state.task);
            this.setState({ task: ''});
        }
    }

    handleChange = e => {
        this.setState({ task: e.target.value });
    }

    render() {
        return (
            <input onKeyDown={this.handleSubmit} onChange={this.handleChange} type='test' placeholder='Add New Todo' value={this.state.task} />
        );
    }

}

export default TodoForm;
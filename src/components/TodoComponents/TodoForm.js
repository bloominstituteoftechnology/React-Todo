import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.props.submit}>
                <input
                name="task"
                value={this.props.task}
                onChange={this.props.input}
                placeholder="Task"
                />
                {/* <input
                name="id"
                value={this.props.id}
                onChange={this.props.input}
                placeholder="id"
                /> */}
                {/* <input
                name="completed"
                value={this.props.completed}
                onChange={this.props.input}
                placeholder="true/false"
                /> */}
                <button type="submit">Add Todo</button>
                <button type="submit">Clear Completed</button>
            </form>
            </div>
        );
    }
};

export default TodoForm
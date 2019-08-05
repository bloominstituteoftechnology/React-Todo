import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div
            className={`task${this.props.completed ? ' done' : ''}`}
            onClick={() => this.props.toggleTask(this.props.task)}
            >{this.props.task}</div>
        )
    }
}

export default Todo;
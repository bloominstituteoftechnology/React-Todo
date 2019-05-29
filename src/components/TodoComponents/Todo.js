import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div className="task-card">
                <p>{this.props.todoOnProps.taskName}</p>
                <p>{this.props.todoOnProps.idNumber}</p>
                <p>{this.props.todoOnProps.completed}</p>
            </div>
        )
    }
}

export default Todo;
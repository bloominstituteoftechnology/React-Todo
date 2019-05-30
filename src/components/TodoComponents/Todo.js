import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div className="task-card">
                <ul>
                    <li>{this.props.todoOnProps.taskName}</li>
                    {/* <li>{this.props.todoOnProps.idNumber}</li>
                    <li>{this.props.todoOnProps.completed}</li> */}
                </ul>
            </div>
        )
    }
}

export default Todo;
import React from 'react';
import './Todo.css';

class Tasks extends React.Component {

    render() {
        return (
            <div className="card">
                <span>Task Name</span>
                {this.props.name}
                <span>Completed?</span>
                {this.props.completed.toString()}
            </div>
        );
    }
}

export default Tasks;
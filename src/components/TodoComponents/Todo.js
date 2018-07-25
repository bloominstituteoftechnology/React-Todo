import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="Task">
                {this.props.todo.value}
            </div>
        );
    }
}

export default Task;

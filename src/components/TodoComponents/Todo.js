import React from 'react';

import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={`todo-item-${this.props.taskData.id} completed-${this.props.taskData.completed}`}>
                {this.props.taskData.task}
            </div>
        )
    }
}

export default Todo
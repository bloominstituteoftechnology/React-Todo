import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = (e) => {
        this.props.setCompleted(e.target.id);
    }

    render() {
        return (
                <li
                    id={this.props.id}
                    onClick={this.handleClick}
                    className={this.props.completed ? 'completed' : ''}
                >
                    {this.props.task}
                </li>
        )
    }
}

export default Todo;
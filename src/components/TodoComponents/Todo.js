import React from 'react';

class Todo extends React.Component {

    completedHandler = () => {
        this.props.strike(this.props.item.id)
    };

    render() {
        return (
            <p onClick={this.completedHandler}>{this.props.item.task}</p>
        )
    }
}

export default Todo
